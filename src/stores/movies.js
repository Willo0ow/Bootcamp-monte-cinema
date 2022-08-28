import { defineStore } from "pinia";
import useMoviesApi from "@/api/useMoviesApi.js";
import useFormatMovieLength from "@composables/useFormatMovieLength.js";
const { retrieveMovies } = useMoviesApi();
const { formatMovieLength } = useFormatMovieLength();

export const useMovieStore = defineStore({
  id: "movies",
  state: () => ({
    movies: [],
  }),
  getters: {},
  actions: {
    async getMovies() {
      const res = await retrieveMovies();
      this.movies = res.map((movie) => {
        const lengthInString = formatMovieLength(movie.length);
        return {
          ...movie,
          length: lengthInString,
        };
      });
    },
  },
});
