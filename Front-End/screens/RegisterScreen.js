import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/Mercedes.png")}
        style={styles.imagetwo}
      />
      <View style={styles.login}>
        <TextInput type="text" value="User Name" style={styles.input} />
        <TextInput type="text" value="email" style={styles.input} />
        <TextInput style={styles.input} type="number" value="Password" />
        <TextInput style={styles.input} type="number" value="Confirm password" />
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
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
  login: {
    flex: 1,
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
});
