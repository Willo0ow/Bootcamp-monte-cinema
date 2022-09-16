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
    forcedFromPath: "",
  }),
  getters: {
    isUserLoggedIn() {
      return Boolean(this.token);
    },
    isForcedLogin() {
      return Boolean(this.forcedFromPath);
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
    async logout(forced = false) {
      await logoutUser();
      this.resetUserToken();
      this.user = null;
      if (forced) {
        this.forceLogin();
      } else {
        $router.push({ name: "Login" });
      }
    },
    async login(email, password) {
      const res = await loginUser(email, password);
      if (res.token) {
        this.user = res.user;
        this.setUserToken(res.token);
        if (this.isForcedLogin) {
          this.returnFromForcedLogin();
        } else {
          $router.push({ name: "Home" });
        }
      }
    },
    restoreUserToken() {
      const token = sessionStorage.getItem(STORAGE_KEY_TOKEN);
      this.token = token || "";
      setAuthHeader(token);
    },
    forceLogin() {
      this.forcedFromPath = $router.currentRoute.value.fullPath;
      $router.push({ name: "Login" });
    },
    returnFromForcedLogin() {
      $router.push(this.forcedFromPath);
      this.forcedFromPath = "";
    },
  },
});
