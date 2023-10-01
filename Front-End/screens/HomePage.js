import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const list = [
  {
    id: "0",
    image: "https://o.remove.bg/downloads/8e96a103-73cf-4440-b289-aa63b09f3159/36b1ce9e423447c5a296c1110b50947e-removebg-preview.png",
    name: "SUV",
  },
  {
    id: "1",
    image:
      "https://o.remove.bg/downloads/6e40f1b6-4385-49dd-9d44-fbf80a50a4ea/2a4aa7e42e7d59e184091508c2223856-removebg-preview.png",
    name: "Luxury",
  },
  {
    id: "3",
    image:
      "https://o.remove.bg/downloads/47212f03-f419-490c-95e1-2d0c737f4080/0b99f5cb737d27734c6859c03a310aff-removebg-preview.png",
    name: "Sports",
  },
  {
    id: "4",
    image:
      "https://o.remove.bg/downloads/de217aa8-4b00-4352-be65-d86d27dfc8b2/617b3abaae16f9c85bae2975fc4cd62a-removebg-preview.png",
    name: "Hybrid",
  },
  {
    id: "5",
    image:
      "https://o.remove.bg/downloads/b144caf6-34ce-4750-a9d8-9d18d1d579e5/fc608b9e65f1e107e6d99a3bb23fa5ff-removebg-preview.png",
    name: "Muscle",
  },
  {
    id: "6",
    image: "https://o.remove.bg/downloads/62d4eeb9-fc68-4993-bddd-a477db29ce3a/dd9d7ece7ac102a1d6144d2da89f1917-removebg-preview.png",
    name: "Racing",
  },
];

const photos = [
  require("../assets/BMW_X5.png"),
  require("../assets/Mercedes.png"),
  require("../assets/Mercedes-Benz.png"),
  require("../assets/MercedesS.png"),
];

export default function HomePage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigation = useNavigation();

  const handleCardPress = (company) => {
    navigation.navigate("Car", { company });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={photos[currentPhotoIndex]} style={styles.image} />
      <ScrollView style={{ flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {list.map((item, index) => (
      <Pressable
        key={index}
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 50, height: 50, resizeMode: "contain" }}
          source={{ uri: item.image }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            fontWeight: "500",
            marginTop: 5,
          }}
        >
          {item?.name}
        </Text>
      </Pressable>
    ))}
  </ScrollView>
      <View style={styles.cardContainer}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardPress("BMW")}
        >
          <Image
            source={require("../assets/BMW_logo_PNG1.png")}
            style={styles.carImage1}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCardPress("Mercedes-Benz")}
          style={styles.card}
        >
          <Image
            source={require("../assets/Mercedes_logo_PNG19.png")}
            style={styles.carImage2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCardPress("Jeep")}
          style={styles.card}
        >
          <Image
            source={require("../assets/Jeep_logo_PNG2.png")}
            style={styles.carImage3}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCardPress("Chevrolet")}
          style={styles.card}
        >
          <Image
            source={require("../assets/Chevrolet_logo_PNG3.png")}
            style={styles.carImage4}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCardPress("Porsche")}
          style={styles.card}
        >
          <Image
            source={require("../assets/Porsche_logo_PNG5.png")}
            style={styles.carImage5}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCardPress("Toyota")}
          style={styles.card}
        >
          <Image
            source={require("../assets/Toyota_logo_PNG15.png")}
            style={styles.carImage6}
          />
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    marginTop:10,
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
