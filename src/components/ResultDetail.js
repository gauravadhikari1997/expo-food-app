import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.thumb }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.user_rating.aggregate_rating} stars,{" "}
        {restaurant.all_reviews_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 5,
  },
});

export default ResultDetail;
