import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Mercedes-Benz.png")}
        style={styles.imagetwo}
      />
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Your Ride, Your Way!"</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Let's Go</Text>
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
    width: 250,
    height: 200,
    resizeMode: "contain",
    marginRight: 65,
    marginTop: 20, // زيادة الهامش العلوي للصورة
  },
  imagetwo: {
    height: 220,
    resizeMode: "contain",
    marginRight: 100,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, // إضافة هامش من الأعلى للزر
  },
  buttonText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    flex: 1,
  },
  text: {
    color: "#8e8e8e",
    fontSize: 26,
    fontWeight: "bold",
    marginRight: 50,
    marginBottom: 30,
  },
});
