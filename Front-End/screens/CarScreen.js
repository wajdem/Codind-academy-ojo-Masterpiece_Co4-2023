import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

const CarCard = () => {
  return (
    <ScrollView style={styles.container}>
      <view><Text>wajde sdsddsdsds</Text></view>
      {/* <View style={styles.card}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.carName}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice}>100 $</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage2}
        />
        <View style={styles.cardContent2}>
          <Text style={styles.carName2}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice2}>100 $</Text>
        </View>
      </View>
      <View style={styles.card3}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage3}
        />
        <View style={styles.cardContent3}>
          <Text style={styles.carName3}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice3}>100 $</Text>
        </View>
      </View>
      <View style={styles.card4}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage4}
        />
        <View style={styles.cardContent4}>
          <Text style={styles.carName4}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice4}>100 $</Text>
        </View>
      </View>
      <View style={styles.card5}>
        <Image
          source={require("../assets/Mercedes-Benz.png")}
          style={styles.carImage5}
        />
        <View style={styles.cardContent5}>
          <Text style={styles.carName5}>Fortuner GR 2022</Text>
          <Text style={styles.carPrice5}>100 $</Text>
        </View>
      </View> */}
    </ScrollView>
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
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
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
  },
  carPrice: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 90,
  },
  card2: {
    width: 342,
    height: 138,
    position: "absolute",
    top: 64,
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    marginTop: 85,
  },
  carImage2: {
    width: 145,
    marginTop: 20,
    marginLeft: 7,
    height: 80,
    resizeMode: "cover",
  },
  cardContent2: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  carName2: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
  },
  carPrice2: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 90,
  },
  card3: {
    width: 342,
    height: 138,
    position: "absolute",
    top: 64,
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    marginTop: 235,
  },
  carImage3: {
    width: 145,
    marginTop: 20,
    marginLeft: 7,
    height: 80,
    resizeMode: "cover",
  },
  cardContent3: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  carName3: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
  },
  carPrice3: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 90,
  },
  card4: {
    width: 342,
    height: 138,
    position: "absolute",
    top: 64,
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    marginTop: 385,
  },
  carImage4: {
    width: 145,
    marginTop: 20,
    marginLeft: 7,
    height: 80,
    resizeMode: "cover",
  },
  cardContent4: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  carName4: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
  },
  carPrice4: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 90,
  },
  card5: {
    width: 342,
    height: 138,
    position: "absolute",
    top: 64,
    left: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    marginTop: 500,
  },
  carImage5: {
    width: 145,
    marginTop: 20,
    marginLeft: 7,
    height: 80,
    resizeMode: "cover",
  },
  cardContent5: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  carName5: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
  },
  carPrice5: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 90,
  },
});

export default CarCard;
