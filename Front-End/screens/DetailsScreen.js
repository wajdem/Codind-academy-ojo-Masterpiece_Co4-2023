import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Mercedes-Benz.png")}
        style={styles.image}
      />
      <Text style={styles.carName}>Mercedes Benz CLE</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Engine size : 2.2</Text>
        </View>
        <View style={styles.card}>
          <Text>wajde</Text>
        </View>
        <View style={styles.card}>
          <Text>wajde</Text>
        </View>
        <View style={styles.card}>
          <Text>wajde</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2b34",
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 180,
    resizeMode: "cover",
    marginTop: 55,
  },
  carName: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    color: "#ffffff",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    gap: 5,
    flexWrap: "wrap",
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
    margin: 5,
  },
  text:{
   fontSize: 20,
   padding: 10,
  },
});
