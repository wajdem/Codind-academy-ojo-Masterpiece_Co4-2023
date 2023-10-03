import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const CarCard = ({ route }) => {
  const { company } = route.params;
  const [cars, setCars] = useState([]);
  const navigation = useNavigation();


  const handleCarPress = (carsId) => {
    navigation.navigate('CarDetails', { carsId });
  };

  useEffect(() => {
    fetch('https://3d77-37-220-113-15.ngrok.io/api/car/all-cars',)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const filteredCars = data.filter(car => car.company === company);
        setCars(filteredCars);
      })
      .catch(error => console.error('Error:', error));
  }, [company]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cars?.map((car) => (
      <TouchableOpacity key={car._id} style={styles.card} onPress={() => handleCarPress(car._id)}>
          <Image source={{uri:car.img.uri}} style={styles.carImage} />
        <View style={styles.cardContent}>
          <Text style={styles.carName}>{car.name}</Text>
          <Text style={styles.carPrice}>{car.price}$</Text>
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
    width: 165,
    marginTop: 18,
    marginLeft: 7,
    height: 95,
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
