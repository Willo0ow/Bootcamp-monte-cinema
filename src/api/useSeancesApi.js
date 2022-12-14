import axios from "@/axios";
import { SEANCES } from "@/api/endpoints.js";

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

export const retrieveSeance = async (seanceId) => {
  try {
    const res = await axios.get(`/${SEANCES}/${seanceId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
