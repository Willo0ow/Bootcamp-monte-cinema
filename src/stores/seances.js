import { defineStore } from "pinia";
import { useMovieStore } from "@/stores/movies";
import { retrieveSeances } from "@/api/useSeancesApi.js";
import { addDateAndTimeToSeances } from "@composables/useAddDateAndTimeToSeances.js";

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
