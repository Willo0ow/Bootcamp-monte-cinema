import axios from "@/axios";
import { HALLS } from "@/api/endpoints.js";

export const retrieveHall = async (hallId) => {
  try {
    const res = await axios.get(`/${HALLS}/${hallId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
