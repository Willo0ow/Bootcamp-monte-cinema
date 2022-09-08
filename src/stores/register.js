import { defineStore } from "pinia";
import { saveRegisterUser } from "../api/useAuthApi";
import { useAuthStore } from "@/stores/auth";

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
      authStore.user = registeredUser;
      authStore.setUserToken(token);
      this.resetRegisterData();
      this.$router.push({ name: "Home" });
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
