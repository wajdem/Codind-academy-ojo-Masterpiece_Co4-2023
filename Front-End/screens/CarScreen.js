import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



const CarCard = ({route }) => {
  // const imgcar = [
  //   {image: require("../img/3series_preview_rev_1.png") },
  //   {image: require("../img/911_preview_rev_1.png") },
  //   {image: require("../img/a-class_preview_rev_1.png") },
  //   {image: require("../img/camaro_preview_rev_1.png") },
  //   {image: require("../img/camry_preview_rev_1.png") },
  //   {image: require("../img/Cayenne_preview_rev_1.png") },
  //   {image: require("../img/cherokee_preview_rev_1.png") },
  //   {image: require("../img/Compass_preview_rev_1.png") },
  //   {image: require("../img/corlla_preview_rev_1.png") },
  //   {image: require("../img/corvette_preview_rev_1.png") },
  //   {image: require("../img/EQS_preview_rev_1.png") },
  //   {image: require("../img/Equinox_preview_rev_1.png") },
  //   {image: require("../img/glc_preview_rev_1.png") },
  //   {image: require("../img/GLE_preview_rev_1.png") },
  //   {image: require("../img/grand-cherokee_preview_rev_1.png") },
  //   {image: require("../img/highlander_preview_rev_1.png") },
  //   {image: require("../img/i4_preview_rev_1.png") },
  //   {image: require("../img/m8_preview_rev_1.png") },
  //   {image: require("../img/macan_preview_rev_1.png") },
  //   {image: require("../img/Panamera_preview_rev_1.png") },
  //   {image: require("../img/ravl_preview_rev_1.png") },
  //   {image: require("../img/S-Class_preview_rev_1.png") },
  //   {image: require("../img/renegade_preview_rev_1.png") },
  //   {image: require("../img/silverado_preview_rev_1.png") },
  //   {image: require("../img/supra_preview_rev_1.png") },
  //   {image: require("../img/trax_preview_rev_1.png") },
  //   {image: require("../img/taycan_preview_rev_1.png") },
  //   {image: require("../img/wrangler_preview_rev_1.png") },
  //   {image: require("../img/x3_preview_rev_1.png") },
  //   {image: require("../img/x7_preview_rev_1.png") },

  // ];
  const { company } = route.params;
  // const [bmwCars, setBmwCars] = useState([]);
  const [cars, setCars] = useState([]);

  const navigation = useNavigation();

  const handleCarPress = () => {
    navigation.navigate('CarDetails', { carId: 'your_car_id_here' });
  };

  useEffect(() => {
    fetch('https://96c0-37-220-117-231.ngrok.io/api/car/all-cars')
      .then(response => response.json())
      .then(data => {
        const filteredCars = data.filter(car => car.company === company);
        setCars(filteredCars);
      })
      .catch(error => console.error('Error:', error));
  }, [company]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cars.map((car, index) => (
      <TouchableOpacity key={index} style={styles.card} onPress={handleCarPress}>
          {/* <Image source={car.image} style={styles.carImage} /> */}
        <View style={styles.cardContent}>
          <Text style={styles.carName}>{car.name}</Text>
          <Text style={styles.carPrice}>{car.price}$</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
    // <ScrollView contentContainerStyle={styles.container}>
    //   {carData.map((car, index) => (
    //     <TouchableOpacity key={index} style={styles.card}>
    //       <View style={styles.cardContent}>
    //         <Text style={styles.carName}>{car.name}</Text>
    //         <Text style={styles.carPrice}>{car.price}</Text>
    //       </View>
    //     </TouchableOpacity>
    //   ))}
    // </ScrollView>
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
