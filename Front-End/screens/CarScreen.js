import React from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const CarCard = () => {
  const carData = [
    { name: "Ionuq 2020", price: "50 $", image: require("../assets/ionuq.png") },
    { name: "Mercedes GLC", price: "150 $", image: require("../assets/Mercedes-GLC.png") },
    { name: "Benz C", price: "175 $", image: require("../assets/Mercedes-Benz.png") },
    { name: "Camaro", price: "120 $", image: require("../assets/Chevrolet-Camaro.png") },
    { name: "Mercedes GLC", price: "150 $", image: require("../assets/Mercedes-GLC.png") },
    { name: "Benz E-Class", price: "100 $", image: require("../assets/Mercedes.png") },
    { name: "Ionuq 2020", price: "50 $", image: require("../assets/ionuq.png") },
    { name: "Mercedes GLC", price: "150 $", image: require("../assets/Mercedes-GLC.png") },
    { name: "Benz C", price: "175 $", image: require("../assets/Mercedes-Benz.png") },

  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {carData.map((car, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={car.image} style={styles.carImage} />
          <View style={styles.cardContent}>
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carPrice}>{car.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 5,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  card: {
    width: 342,
    height: 138,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2c2b34",
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
  },
  carImage: {
    width: 145,
    marginTop: 20,
    marginLeft: 7,
    height: 80,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  carName: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
    color: "#ffffff",
  },
  carPrice: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 90,
  },
});

export default CarCard;
