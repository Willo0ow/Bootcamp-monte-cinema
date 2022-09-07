import { defineStore } from "pinia";
import { saveRegisterUser } from "../api/useAuthApi";

export const useRegisterStore = defineStore({
  id: "register",
  state: () => ({
    email: { inputValue: "", isValid: false },
    password: { inputValue: "", isValid: false },
    firstName: { inputValue: "", isValid: false },
    lastName: { inputValue: "", isValid: false },
    dateOfBirth: { inputValue: null, isValid: false },
    areTermsAccepted: { inputValue: false, isValid: false },
  }),
  getters: {},
  actions: {
    async registerUser() {
      const user = {
        email: this.email.inputValue,
        password: this.password.inputValue,
        first_name: this.firstName.inputValue,
        last_name: this.lastName.inputValue,
        date_of_birth: this.dateOfBirth.inputValue,
      };
      const newUser = await saveRegisterUser({ user });
      this.resetRegisterData();
    },
    resetRegisterData() {
      this.email = { inputValue: "", isValid: false };
      this.password = { inputValue: "", isValid: false };
      this.firstName = { inputValue: "", isValid: false };
      this.lastName = { inputValue: "", isValid: false };
      this.dateOfBirth = { inputValue: null, isValid: false };
      this.areTermsAccepted = { inputValue: false, isValid: false };
    },
  },
});
