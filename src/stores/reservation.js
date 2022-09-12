import { defineStore } from "pinia";
import { retrieveSeance } from "@/api/useSeancesApi.js";
import { retrieveHall } from "@/api/useHallsApi.js";
import { retrieveMovie } from "@/api/useMoviesApi.js";

export const useReservationStore = defineStore({
  id: "reservation",
  state: () => ({
    seance: null,
    hall: null,
    movie: null,
  }),
  getters: {},
  actions: {
    async getSeanceData(seanceId) {
      this.seance = await retrieveSeance(seanceId);
      this.hall = await retrieveHall(this.seance.hall);
      this.movie = await retrieveMovie(this.seance.movie);
    },
  },
});
