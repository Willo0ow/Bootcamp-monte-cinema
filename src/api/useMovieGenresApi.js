import axios from "../axios";
import { MOVIE_GENRES } from "./endpoints.js";

function useMovieGenresApi() {
  async function retrieveMovieGenres() {
    try {
      const res = await axios.get(`/${MOVIE_GENRES}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    retrieveMovieGenres,
  };
}
export default useMovieGenresApi;
