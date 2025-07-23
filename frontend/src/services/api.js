import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your production URL on deploy
});

// 🔐 Attach JWT token to every request (if available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🚀 Auth Endpoints
export const loginUser = (data) => API.post("/users/login", data);
export const registerUser = (data) => API.post("/users/register", data);

// ✅ Task Endpoints
export const getTasks = () => API.get("/tasks");
export const createTask = (data) => API.post("/tasks", data);

// 🛠️ (Optional) Add more as needed:
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
