import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function Order({ route, navigation }) {
  const { carsId } = route.params;
  const [seconds, setSeconds] = useState(100);
  const [modalVisible, setModalVisible] = useState(false);
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`https://6192-94-249-0-63.ngrok.io/api/car/all-cars/${carsId}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
        // console.log(data.img.uri); // Add this line
      })
      .catch((error) => console.error("Error:", error));
  }, [carsId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      setModalVisible(true);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToHomePage = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-no-background.png")}
        style={styles.image}
      />
      {car && (
        <View style={styles.container2}>
          <Text style={styles.text}>
            Get ready to hit the road, Your awesome
            <Text style={styles.boldText}>
              {car.company} {car.name}
            </Text>
            is en route.
          </Text>
          <Image source={{ uri: car.img.uri }} style={styles.imageTwo} />
        </View>
      )}
      <View style={styles.card}>
        <Text style={styles.timerText}>
          {Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0")}
          :{(seconds % 60).toString().padStart(2, "0")}
        </Text>
      </View>
      <StatusBar style="auto" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Your car has arrived. You can pick it up.
          </Text>
          <TouchableOpacity onPress={goToHomePage} style={styles.button}>
            <Text style={styles.buttonText}>Check-In</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2b34",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    marginBottom: 100,
  },
  card: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 60,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
  timerText: {
    color: "#2c2b34",
    fontSize: 60,
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  imageTwo: {
    height: 250,
  },
  modalView: {
    margin: 20,
    marginTop: 300,
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
    fontSize: 20,
  },
  button: {
    backgroundColor: "#2c2b34",
    padding: 15,
    borderRadius: 10,
    width: 230,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
