import { defineStore } from "pinia";

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
  actions: {},
});
