import axios from "axios";

export const apiGetPatients = axios.create({
  baseURL: "https://umr01ot5ug.execute-api.us-east-1.amazonaws.com/manage/patients/",
});

export const api = axios.create({
  baseURL: "https://umr01ot5ug.execute-api.us-east-1.amazonaws.com/manage/patient/"
})