import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,  TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {

  const goToLogin = () => {
    navigation.navigate('Login');
  }
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/21fbfee4c031eca30e259863eff57e09-removebg-preview.png")}
        style={styles.imagetwo}
      />
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Your Ride, Your Way!"</Text>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
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
  },
  imagetwo: {
    height: 400,
    resizeMode: "contain",
    marginRight: 170,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  buttonText: {
    color: "#000000",
    fontSize: 25,
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
