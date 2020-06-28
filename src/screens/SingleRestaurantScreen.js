import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { withNavigation } from "react-navigation";

import zomato from "../api/zomato";

const SingleRestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await zomato.get(`/restaurant?res_id=${id}`);
      setResult(response.data);
    }
    getData();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image style={styles.image} source={{ uri: result.thumb }} />
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.name}>Average Cost For Two</Text>
            <Text>
              {result.currency} {result.average_cost_for_two}
            </Text>
            <Text style={styles.name}>Cuisines</Text>
            <Text>{result.cuisines}</Text>
            <Text style={styles.name}>Timings</Text>
            <Text>{result.timings}</Text>
            <Text style={styles.name}>Highlights -</Text>
          </>
        }
        data={result.highlights}
        keyExtractor={(it) => it}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
  },
  container: {
    marginHorizontal: 15,
  },
  image: {
    width: "auto",
    height: 120,
    borderRadius: 4,
    marginVertical: 5,
  },
});

export default SingleRestaurantScreen;
