import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CarCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.carName}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice}>100 $</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  card: {
    width: 342,
    height: 138,
    position: "absolute",
    top: 64,
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
  },
  carImage: {
    width: 138,
    height: 85,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between", // يضع العناصر بينهم بالتساوي
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  carPrice: {
    fontSize: 14,
    color: "green",
  },
});

export default CarCard;
