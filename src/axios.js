import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const axiosApi = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: { "Content-Type": "application/json" },
});

axiosApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const authStore = useAuthStore();
      await authStore.logout();
    }
    return Promise.reject(error);
  }
);

export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.common["Authorization"] = token;
};

export const removeAuthHeader = () => {
  axiosApi.defaults.headers.common["Authorization"] = "";
};

export default axiosApi;
