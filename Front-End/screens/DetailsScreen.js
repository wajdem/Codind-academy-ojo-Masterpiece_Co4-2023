import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function DetailsScreen() {
  const route = useRoute();
  const { carsId } = route.params;
  const [carDetails, setCarDetails] = useState(null);
  const [isReserved, setIsReserved] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch car details based on carId
    fetch(`https://7248-37-220-118-20.ngrok.io/api/car/all-cars/${carsId}`)
      .then((response) => response.json())
      .then((data) => setCarDetails(data))
      .catch((error) => console.error("Error:", error));
  }, [carsId]);

  const reserveCar = () => {
    setIsReserved(true);
  };

  if (!carDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Feather name="user" size={34} color="#ffffff" />
      </TouchableOpacity>
      <Image source={{ uri: carDetails.img.uri }} style={styles.image} />
      <Text style={styles.carName}>
        {carDetails.company} {carDetails.name}
      </Text>
      <View style={styles.cardContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardScroll}
        >
          <View style={styles.card}>
            <Icon name="calendar" size={35} color="#282931" />
            <Text style={styles.text}>{carDetails.manufactureDate}</Text>
          </View>
          <View style={styles.card}>
            <Icon name="cogs" size={35} color="#282931" />
            <Text style={styles.text}>{carDetails.engineCapacity}</Text>
          </View>
          <View style={styles.card}>
            <Icon name="tachometer" size={35} color="#282931" />
            <Text style={styles.text}>{carDetails.speed}/km</Text>
          </View>
          <View style={styles.card}>
            <Icon name="tint" size={33} color="#282931" />
            <Text style={styles.text}>{carDetails.fuelType}</Text>
          </View>
          <View style={styles.card}>
            <Icon name="car" size={35} color="#282931" />
            <Text style={styles.text}>{carDetails.condition}</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => reserveCar()}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isReserved}
        onRequestClose={() => {
          setIsReserved(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Car has been reserved and is on its way to you!
            </Text>
            <Pressable
              style={styles.okButton}
              onPress={() => {
                setIsReserved(false);
                navigation.navigate("HomePage");
              }}
            >
              <Text style={styles.okButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  profileIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
  image: {
    width: 390,
    height: 190,
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
    marginLeft: 13,
  },
  text: {
    fontSize: 18,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22,
  },
  okButton: {
    width: 200,
    height: 50,
    elevation: 20,
    color: "#ffff",
    backgroundColor: "#2c2b34",
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  okButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
