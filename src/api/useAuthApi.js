import axios from "@/axios";
import { auth } from "@/api/endpoints.js";

export const saveRegisterUser = async (registerData) => {
  try {
    const res = await axios.post(`/${auth.REGISTER}`, registerData);
    return { user: res.data, token: res.headers.authorization };
  } catch (error) {
    console.log(error);
    return null;
  }
};
