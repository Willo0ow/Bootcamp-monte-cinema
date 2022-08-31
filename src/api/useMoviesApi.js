import axios from "@/axios";
import { MOVIES } from "@/api/endpoints.js";

export const retrieveMovies = async (movieId = null) => {
  try {
    const res = await axios.get(`/${MOVIES}${movieId ? "/" + movieId : ""}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return movieId ? {} : [];
  }
};
