import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const TOKEN = localStorage.getItem("accessToken") || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

/*
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const TOKEN = JSON.parse(localStorage.getItem("accessToken")) || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` }, // Corrected spelling to "headers"
});

*/
