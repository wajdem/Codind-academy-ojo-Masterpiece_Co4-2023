// import { useState } from "react";
import { StatusBar } from "expo-status-bar";
// import { useLogin } from "../hooks/useLogin";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

const LoginScreen = ({ navigation }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { login, error, isLoading } = useLogin();


  // const handleSubmit = async () => {
  //   await login(email, password);
  // };


  const goToRegister = () => {
    navigation.navigate('Register');
  }

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
            type="text"
            placeholder="email"
            style={styles.input}
            // onChangeText={setEmail}
            // value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            type="number"
            placeholder="Password"
            secureTextEntry
            // onChangeText={setPassword}
            // value={password}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} title="Log in" >Login</Text>
            {/* {error && <Text style={styles.error}>{error}</Text>} */}
          </TouchableOpacity>

          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.signupText}>Don't have an account? Signup</Text>
          </TouchableOpacity>

        </View>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

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
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
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
  signupText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
