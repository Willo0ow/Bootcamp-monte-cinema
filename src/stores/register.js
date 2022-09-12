import { defineStore } from "pinia";
import { saveRegisterUser } from "../api/useAuthApi";
import { useAuthStore } from "@/stores/auth";
import $router from "@/router";

const authStore = useAuthStore();

export const useRegisterStore = defineStore({
  id: "register",
  state: () => ({
    registerData: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
    },
  }),
  getters: {},
  actions: {
    setFormProperty(property, value) {
      this.registerData[property] = value;
    },
    async registerUser() {
      const { email, password, firstName, lastName, dateOfBirth } =
        this.registerData;
      const user = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
      };
      const { registeredUser, token } = await saveRegisterUser({ user });
      if (registeredUser) {
        authStore.user = registeredUser;
        authStore.setUserToken(token);
        this.resetRegisterData();
        $router.push({ name: "Home" });
      } else {
        this.resetRegisterData();
        $router.push({ name: "Login" });
      }
    },
    resetRegisterData() {
      this.registerData = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dateOfBirth: null,
      };
    },
  },
});
