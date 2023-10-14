import axios from "axios";

export default axios.create({
  baseURL: "http://140.130.33.150:5279/",
  headers: {
    "Content-type": "application/json"
  }
});
