import { defineStore } from "pinia";
import useMoviesApi from "@/api/useMoviesApi.js";
const { retrieveMovies } = useMoviesApi();

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
        const { length, genre, poster_url } = movie;
        const hours = Math.floor(length / 60);
        const minutes = `0${length % 60}`.slice(-2);
        const lengthInString = `${hours}h ${minutes}min`;
        return {
          ...movie,
          length: lengthInString,
          image: poster_url,
          tag: genre.name,
        };
      });
    },
  },
});
