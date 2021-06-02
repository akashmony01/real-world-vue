import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/akashmony01/real-world-vue",
  withCredentials: false,
  headers: {
    Accpet: "application/json",
    "Content-Type": "application/json",
  },
})

export default {
  getUsers() {
    return apiClient.get("/users")
  },
  getUser(id) {
    return apiClient.get("/users/" + id)
  },
}
