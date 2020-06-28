import { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get(
        `/search?entity_id=4&entity_type=city&q=${searchTerm}`
      );
      setResult(response.data.restaurants);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("cake");
  }, []);

  return [result, errorMessage, searchApi];
};
