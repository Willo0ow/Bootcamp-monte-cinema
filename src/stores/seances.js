import { defineStore } from "pinia";
import { useMovieStore } from "./movies";
import useSeancesApi from "@/api/useSeancesApi.js";
import useAddDateAndTimeToSeances from "@composables/useAddDateAndTimeToSeances.js";
const { retrieveSeances } = useSeancesApi();
const { addDateAndTimeToSeances } = useAddDateAndTimeToSeances();

export const useSeanceStore = defineStore({
  id: "seances",
  state: () => ({
    dateSeances: [],
  }),
  getters: {
    dateMovieSeances() {
      const movieStore = useMovieStore();
      return this.dateSeances.reduce((movies, seance) => {
        const { date, time, id } = seance;
        const movieIndex = movies.findIndex((item) => item.id === seance.movie);
        if (movieIndex < 0) {
          movies.push({
            seances: [{ date, time, id }],
            ...movieStore.movies.find((movie) => movie.id === seance.movie),
          });
        } else {
          const updatedMovieSeances = { ...movies[movieIndex] };
          updatedMovieSeances.seances.push({ date, time, id });
          movies.splice(movieIndex, 1, updatedMovieSeances);
        }
        return movies;
      }, []);
    },
  },
  actions: {
    async getDateSeances(date) {
      const res = await retrieveSeances({ date });
      this.dateSeances = addDateAndTimeToSeances(res);
    },
  },
});
