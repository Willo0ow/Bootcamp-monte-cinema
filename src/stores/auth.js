import { defineStore } from "pinia";
import { setAuthHeader, removeAuthHeader } from "@/axios";
import { loginUser } from "@/api/useAuthApi";
const STORAGE_KEY_TOKEN = "authToken";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: "",
  }),
  getters: {
    isUserLoggedIn() {
      return !!this.token;
    },
  },
  actions: {
    setUserToken(token) {
      this.token = token;
      sessionStorage.setItem(STORAGE_KEY_TOKEN, token);
      setAuthHeader(token);
    },
    resetUserToken() {
      this.token = "";
      sessionStorage.removeItem(STORAGE_KEY_TOKEN);
      removeAuthHeader();
    },
    logout() {
      this.resetUserToken();
      this.user = null;
      this.$router.push({ name: "Login" });
    },
    async login(email, password) {
      const res = await loginUser(email, password);
      this.user = res.user;
      this.setUserToken(res.token);
      this.$router.push({ name: "Home" });
    },
    restoreUserToken() {
      const token = sessionStorage.getItem(STORAGE_KEY_TOKEN);
      this.token = token || "";
      setAuthHeader(token);
    },
  },
});
