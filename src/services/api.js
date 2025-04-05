import axios from "axios";

// API base URL for your FastAPI backend
const API_URL = "http://127.0.0.1:8000";  // Adjust this if necessary

// Create an axios instance for consistent headers
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// **Price Prediction API call**

export const predictPrice = async (demand, season) => {
  try {
    const response = await apiClient.post("/predict_price/", { demand, season });
    return response.data;  // Expecting { "predicted_price": <value> }
  } catch (error) {
    throw new Error("Prediction failed: " + error.response?.data?.detail);
  }
};

// Helper function to get the JWT token from localStorage (for protected routes)
export const getToken = () => localStorage.getItem("token");

// Helper function to set the Authorization header for protected routes
export const setAuthHeader = () => {
  const token = getToken();
  if (token) {
    apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
};
