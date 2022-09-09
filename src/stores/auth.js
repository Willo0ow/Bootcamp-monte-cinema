import { defineStore } from "pinia";
import { setAuthHeader, removeAuthHeader } from "@/axios";
import $router from "@/router";
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
      $router.push({ name: "Login" });
    },
    restoreUserToken() {
      const token = sessionStorage.getItem(STORAGE_KEY_TOKEN);
      this.token = token || "";
      setAuthHeader(token);
    },
  },
});
