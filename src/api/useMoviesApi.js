import axios from "../axios";
import { MOVIES } from "./endpoints.js";

function useMoviesApi() {
  async function retrieveMovies(movieId = null) {
    try {
      const res = await axios.get(`/${MOVIES}${movieId ? "/" + movieId : ""}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return movieId ? {} : [];
    }
  }
  return {
    retrieveMovies,
  };
}
export default useMoviesApi;
