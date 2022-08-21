import { defineStore } from "pinia";
import { useMovieStore } from "./movies";
import useSeancesApi from "@/api/useSeancesApi.js";
const { retrieveDateSeances } = useSeancesApi();

export const useSeanceStore = defineStore({
  id: "seances",
  state: () => ({
    dateSeances: [],
  }),
  getters: {
    deateMovieSeances() {
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
      const res = await retrieveDateSeances(date);
      this.dateSeances = res.map((seance) => {
        const date = seance.datetime.split("T")[0];
        const time = seance.datetime.split("T")[1].slice(0, 5);
        return { ...seance, date, time };
      });
    },
  },
});
