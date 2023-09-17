import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Mercedes-Benz.png")}
        style={styles.image}
      />
      <Text style={styles.carName}>Mercedes Benz CLE</Text>
      <View style={styles.cardContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardScroll}>

        <View style={styles.card}>
        <Icon name="calendar" size={35} color="#282931" />
          <Text style={styles.text}>2023</Text>
        </View>
        <View style={styles.card}>
        <Icon name="cogs" size={35} color="#282931" />
          <Text style={styles.text}>1332cc</Text>
        </View>
        <View style={styles.card}>
        <Icon name="tachometer" size={35} color="#282931" />
          <Text style={styles.text}>123/km</Text>
        </View>
        <View style={styles.card}>
        <Icon name="tint" size={35} color="#282931" />
          <Text style={styles.text}>petrol</Text>
        </View>
        <View style={styles.card}>
        <Icon name="car" size={35} color="#282931" />
          <Text style={styles.text}>new</Text>
        </View>
        </ScrollView>

      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 31.9454,
            longitude: 35.9284,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 31.9454, longitude: 35.9284 }}
            title="Amman, Jordan"
            description="Capital city of Jordan"
          />
        </MapView>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
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
    width: 90,
    height: 90,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    margin: 5,
    marginLeft:13,

  },
  text: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
  },
  mapContainer: {
    width: 330,
    height: 175,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    marginVertical: 10,
    alignSelf: "center",
  },
  map: {
    flex: 1,
  },
});
