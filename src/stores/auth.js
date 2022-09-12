import { defineStore } from "pinia";
import { setAuthHeader, removeAuthHeader } from "@/axios";
import { loginUser, logoutUser } from "@/api/useAuthApi";
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
      return this.token ? true : false;
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
    async logout() {
      await logoutUser();
      this.resetUserToken();
      this.user = null;
      $router.push({ name: "Login" });
    },
    async login(email, password) {
      const res = await loginUser(email, password);
      if (res.token) {
        this.user = res.user;
        this.setUserToken(res.token);
        $router.push({ name: "Home" });
      }
    },
    restoreUserToken() {
      const token = sessionStorage.getItem(STORAGE_KEY_TOKEN);
      this.token = token || "";
      setAuthHeader(token);
    },
  },
});
