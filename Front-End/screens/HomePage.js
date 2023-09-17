import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity  } from "react-native";

const photos = [
  require("../assets/BMW_X5.png"),
  require("../assets/Mercedes.png"),
  require("../assets/Mercedes-Benz.png"),
  require("../assets/MercedesS.png"),
];

export default function HomePage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={photos[currentPhotoIndex]} style={styles.image} />
      <View style={styles.cardContainer}>
        <TouchableOpacity  style={styles.card}>
          <Image
            source={require("../assets/BMW_logo_PNG1.png")}
            style={styles.carImage1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/Mercedes_logo_PNG19.png")}
            style={styles.carImage2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/Jeep_logo_PNG2.png")}
            style={styles.carImage3}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/Chevrolet_logo_PNG3.png")}
            style={styles.carImage4}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/Porsche_logo_PNG5.png")}
            style={styles.carImage5}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/Toyota_logo_PNG15.png")}
            style={styles.carImage6}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 180,
    resizeMode: "cover",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    gap: 5,
    flexWrap: "wrap",
  },
  card: {
    width: 165,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2c2b34",
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
    margin: 5,
  },
  carImage1: {
    width: 125,
    marginTop: 13,
    marginLeft: 20,
    height: 123,
    resizeMode: "cover",
  },
  carImage2: {
    width: 125,
    marginTop: 10,
    marginLeft: 23,
    height: 123,
    resizeMode: "cover",
  },
  carImage3: {
    width: 150,
    marginTop: 13,
    marginLeft: 8,
    height: 120,
    resizeMode: "cover",
  },
  carImage4: {
    width: 170,
    marginTop: 33,
    height: 72,
    resizeMode: "cover",
  },
  carImage5: {
    width: 100,
    marginTop: 15,
    marginLeft: 35,
    height: 130,
    resizeMode: "cover",
  },
  carImage6: {
    width: 153,
    marginTop: 20,
    marginLeft: 6,
    height: 105,
    resizeMode: "cover",
  },
});
