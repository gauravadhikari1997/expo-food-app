import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "63858a3af671b8baab482d2f1f55d5ac",
  },
});
