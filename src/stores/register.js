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
      const res = await saveRegisterUser({ user });
      console.log(res.data);
    },
  },
});
