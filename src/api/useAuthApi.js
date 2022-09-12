import axios from "@/axios";
import { auth } from "@/api/endpoints.js";
import { notify } from "@kyvg/vue3-notification";

export const saveRegisterUser = async (registerData) => {
  try {
    const res = await axios.post(`/${auth.REGISTER}`, registerData);
    return { user: res.data, token: res.headers.authorization };
  } catch (error) {
    if (error.response.data.errors?.email[0] === "has already been taken") {
      notify({
        title: "This email is already taken",
        text: "There is an account associated to provided email",
        type: "error",
        group: "auth",
        duration: 5000,
      });
    }
    console.log(error);
    return { user: null, token: "" };
  }
};
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`/${auth.LOGIN}`, {
      user: { email, password },
    });
    return { user: res.data, token: res.headers.authorization };
  } catch (error) {
    if (error.response.data.status === 401) {
      notify({
        title: "Authorization Error",
        text: "Provided credentials are incorrect",
        type: "error",
        group: "auth",
        duration: 5000,
      });
    }
    console.log(error);
    return { user: null, token: "" };
  }
};
export const logoutUser = async () => {
  try {
    await axios.delete(`/${auth.LOGOUT}`);
  } catch (error) {
    console.log(error);
  }
};
