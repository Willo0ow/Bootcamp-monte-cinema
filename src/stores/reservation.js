import { defineStore } from "pinia";
import { retrieveSeance } from "@/api/useSeancesApi.js";
import { retrieveHall } from "@/api/useHallsApi.js";
import { retrieveMovie } from "@/api/useMoviesApi.js";
import { formatMovieLength } from "@helpers/useFormatMovieLength";

export const useReservationStore = defineStore({
  id: "reservation",
  state: () => ({
    seance: null,
    hall: null,
    movie: null,
  }),
  getters: {
    hallMatrix() {
      if (this.seance) {
        const seats = [
          ...this.seance.taken_seats.map((seat) => ({
            seat,
            taken: true,
            row: seat.slice(0, 1),
            column: +seat.slice(1),
          })),
          ...this.seance.available_seats.map((seat) => ({
            seat,
            taken: false,
            row: seat.slice(0, 1),
            column: +seat.slice(1),
          })),
        ];
        const hallRows = seats.reduce((rows, seat) => {
          if (rows[seat.row]) {
            rows[seat.row].push(seat);
          } else {
            rows[seat.row] = [seat];
          }
          return rows;
        }, {});
        Object.keys(hallRows).forEach((row) =>
          hallRows[row].sort((a, b) => a.column - b.column)
        );
        return hallRows;
      } else {
        return {};
      }
    },
  },
  actions: {
    async getSeanceData(seanceId) {
      this.seance = await retrieveSeance(seanceId);
      this.hall = await retrieveHall(this.seance.hall);
      const movie = await retrieveMovie(this.seance.movie);
      movie.length = formatMovieLength(movie.length);
      this.movie = movie;
    },
  },
});
