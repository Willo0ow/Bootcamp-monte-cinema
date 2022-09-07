import axios from "@/axios";
import { auth } from "@/api/endpoints.js";

export const saveRegisterUser = async (registerData) => {
  try {
    const res = await axios.post(`/${auth.REGISTER}`, registerData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
