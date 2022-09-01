import axios from "@/axios";
import { MOVIE_GENRES } from "@/api/endpoints.js";

export const retrieveMovieGenres = async () => {
  try {
    const res = await axios.get(`/${MOVIE_GENRES}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
