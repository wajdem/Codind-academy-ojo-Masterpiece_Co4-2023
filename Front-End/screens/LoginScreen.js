import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";


const LoginScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);


  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://6796-86-108-71-114.ngrok.io/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful login here
        console.log("Login successful:", data);
        navigation.navigate('HomePage'); // Navigate to HomePage.js
      } else {
        // Handle login error here
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../assets/logo-no-background.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/Chevrolet-Camaro.png")}
          style={styles.imagetwo}
        />
        <View style={styles.login}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={togglePasswordVisibility}
            >
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                size={24}
                color="rgb(44, 43, 52)"
              />
            </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Text style={{ color: "blue", fontSize: 17 }}>SignUp</Text>
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(44, 43, 52)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  imagetwo: {
    height: 300,
    resizeMode: "contain",
    marginLeft: 130,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
    position: "relative",
    width: "100%",
  },
  signupText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  inputContainer: {

  },
  icon: {
    position: "absolute",
    top: 12,
    left: 265,
  },
  signupText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 10,
    marginLeft:50,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
