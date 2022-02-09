import axios from "axios";

const api = axios.create({
  baseURL: "https://umr01ot5ug.execute-api.us-east-1.amazonaws.com/manage/"
})

export default api