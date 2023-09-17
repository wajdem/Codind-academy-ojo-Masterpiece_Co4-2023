import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSignup } from "../hooks/useSignup";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const  LoginScreen = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // const { signup, error, isLoading } = useSignup();

  // const handleSubmit = async () => {
  //   // Perform password match validation
  //   if (password !== confPassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }

  //   await signup(username, email, password, confPassword);
  // };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../assets/logo-no-background.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/Mercedes.png")}
          style={styles.imagetwo}
        />
        <View style={styles.signup}>
          <TextInput 
            type="text" 
            placeholder="User Name" 
            style={styles.input} 
            // onChangeText={setUsername}
            // value={username}
          />
          <TextInput 
            type="text" 
            placeholder="email" 
            style={styles.input} 
            // onChangeText={setEmail}
            // value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            // onChangeText={setPassword}
            // value={password}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            // onChangeText={setConfPassword}
            // value={confPassword}
            placeholder="Confirm password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} title="Sign up">Sign Up</Text>
            {/* {error && <Text style={styles.error}>{error}</Text>} */}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

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
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
