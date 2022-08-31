import axios from "@/axios";
import { MOVIES } from "@/api/endpoints.js";

export const retrieveMovies = async () => {
  try {
    const res = await axios.get(`/${MOVIES}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const retrieveMovie = async (movieId) => {
  try {
    const res = await axios.get(`/${MOVIES}/${movieId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
