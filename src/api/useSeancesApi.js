import axios from "../axios";
import { SEANCES } from "./endpoints.js";

export const retrieveSeances = async ({ date = null, movieId = null }) => {
  try {
    const res = await axios.get(`/${SEANCES}`, {
      params: {
        date,
        movie_id: movieId,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
