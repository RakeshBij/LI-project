import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://example.com/api"; // Replace with your API base URL

// Function to make a POST request
export async function post(url: string, data: any): Promise<AxiosResponse> {
  try {
    const response = await axios.post(`${API_BASE_URL}/${url}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// Function to make a GET request
export async function get(url: string): Promise<AxiosResponse> {
  try {
    const response = await axios.get(`${API_BASE_URL}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// Add more functions for other types of requests (PUT, DELETE, etc.) if needed

export default {
  post,
  get,
};
