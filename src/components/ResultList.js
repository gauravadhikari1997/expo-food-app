import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import ResultDetail from "./ResultDetail";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

const ResultList = ({ title, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(rest) => rest.restaurant.id}
        renderItem={({ item }) => {
          return <ResultDetail restaurant={item.restaurant} />;
        }}
      />
    </View>
  );
};

export default ResultList;
