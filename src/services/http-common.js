import axios from "axios";

const IncidentUrl = "http://localhost:8080/api";

export default axios.create({
  baseURL: IncidentUrl,
  headers: {
    "Content-type": "application/json"
  }
});