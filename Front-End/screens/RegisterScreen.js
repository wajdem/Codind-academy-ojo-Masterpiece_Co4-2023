import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
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

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "https://75fa-37-220-113-15.ngrok.io/api/user/signup",
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
        // Handle successful signup here
        console.log("Signup successful:", data);

        // Navigate to LoginScreen after successful signup
        navigation.navigate("Login");
      } else {
        // Handle signup error here
        console.error("Signup failed:", data.error || "Unknown error");
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.image}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../assets/Mercedes.png")}
          style={styles.imagetwo}
        />
        <View style={styles.signup}>
          <TextInput
            placeholder="User Name"
            style={styles.input}
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
          <TextInput
            placeholder="Phone"
            style={styles.input}
            value={formData.phoneNumber}
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
          />
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
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(44, 43, 52)",
  },
  scrollContainer: {
    marginBottom: 35,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginLeft:88,
  },
  imagetwo: {
    height: 200,
    resizeMode: "contain",
    marginLeft: 100,
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
    fontSize: 15,
    fontWeight: "bold",
  },
  signup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    position: "relative",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 265,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default SignupScreen;
