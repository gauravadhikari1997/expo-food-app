import React, { useState } from "react";
import { Text, ScrollView } from "react-native";

import useResult from "../hooks/useResult";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, errorMessage, searchApi] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((item) => {
      return item.restaurant.price_range === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList result={filterResultByPrice(2)} title="Cost Effective" />
        <ResultList result={filterResultByPrice(3)} title="Bit Pricier" />
        <ResultList result={filterResultByPrice(4)} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
