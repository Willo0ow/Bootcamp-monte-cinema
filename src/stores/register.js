import { defineStore } from "pinia";
import { saveRegisterUser } from "@/api/useAuthApi";
import { useAuthStore } from "@/stores/auth";
import $router from "@/router";

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
      const registerResponse = await saveRegisterUser({ user });
      if (registerResponse.user) {
        const authStore = useAuthStore();
        authStore.user = registerResponse.user;
        authStore.setUserToken(registerResponse.token);
        this.resetRegisterData();
        if (authStore.isForcedLogin) {
          authStore.returnFromForcedLogin();
        } else {
          $router.push({ name: "Home" });
        }
      } else {
        this.resetRegisterData();
        $router.push({ name: "Register" });
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
