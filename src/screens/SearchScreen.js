import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import zomato from "../api/zomato";

import SearchBar from "../components/SearchBar";

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchApi = async (searchTerm) => {
    const response = await zomato.get(
      `/search?entity_id=4&entity_type=city&q=dominos`
    );
    console.log(response.data);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;
