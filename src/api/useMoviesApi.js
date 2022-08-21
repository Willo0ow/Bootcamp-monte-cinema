import axios from "../axios";
import { MOVIES } from "./endpoints.js";

function useMoviesApi() {
  async function retrieveMovies() {
    try {
      const res = await axios.get(`/${MOVIES}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    retrieveMovies,
  };
}
export default useMoviesApi;
