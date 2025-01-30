// service.js
import axios from "axios";

export async function getUserData(id) {
  const response = await axios.get(`/users/${id}`);
  return response.data;
}
