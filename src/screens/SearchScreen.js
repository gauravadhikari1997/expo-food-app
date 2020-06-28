import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import useResult from "../hooks/useResult";
import SearchBar from "../components/SearchBar";

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, errorMessage, searchApi] = useResult();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} results</Text>
    </View>
  );
};

export default SearchScreen;
