import axios from "../axios";
import { SEANCES } from "./endpoints.js";

function useSeancesApi() {
  async function retrieveDateSeances(date) {
    try {
      const res = await axios.get(`/${SEANCES}?date=${date}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function retrieveMovieSeances(movieId) {
    try {
      const res = await axios.get(`/${SEANCES}?movie_id=${movieId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function retrieveDateMovieSeances(date, movieId) {
    try {
      const res = await axios.get(
        `/${SEANCES}?movie_id=${movieId}&date=${date}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function retrieveSeances() {
    try {
      const res = await axios.get(`/${SEANCES}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    retrieveDateSeances,
    retrieveMovieSeances,
    retrieveDateMovieSeances,
    retrieveSeances,
  };
}
export default useSeancesApi;
