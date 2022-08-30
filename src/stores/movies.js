import { defineStore } from "pinia";
import { retrieveMovies } from "@/api/useMoviesApi.js";
import { formatMovieLength } from "@composables/useFormatMovieLength.js";

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
