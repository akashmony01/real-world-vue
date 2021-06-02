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
  getEvents() {
    return apiClient.get("/events")
  },
}