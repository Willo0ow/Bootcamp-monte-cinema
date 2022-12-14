import { defineStore } from "pinia";
import { retrieveSeance } from "@/api/useSeancesApi.js";
import { retrieveHall } from "@/api/useHallsApi.js";
import { retrieveMovie } from "@/api/useMoviesApi.js";
import { formatMovieLength } from "@helpers/useFormatMovieLength";
import { saveReservation } from "@/api/useReservationApi";
import $router from "@/router";

export const useReservationStore = defineStore({
  id: "reservation",
  state: () => ({
    seance: null,
    hall: null,
    movie: null,
    selectedSeats: [],
    activePanel: 0,
  }),
  getters: {
    selectedSeatsNumbers() {
      return this.selectedSeats.map((seat) => seat.seat);
    },
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
    selectSeats(seats) {
      this.activePanel = 1;
      this.selectedSeats = seats.map((seat) => {
        return { seat, ticketType: 1 };
      });
    },
    updateTicketType(type, seatIndex) {
      this.selectedSeats[seatIndex].ticketType = type;
    },
    removeSeat(seatIndex) {
      this.selectedSeats.splice(seatIndex, 1);
    },
    revertDefiningTickets() {
      this.selectedSeats.forEach((seat, index) => {
        this.selectedSeats[index].ticketType = 1;
      });
      this.activePanel = 0;
    },
    resetReservation() {
      this.seance = null;
      this.hall = null;
      this.movie = null;
      this.selectedSeats = [];
      this.activePanel = 0;
    },
    async bookTickets() {
      const tickets = this.selectedSeats.map((seat) => {
        return { seat: seat.seat, ticket_type_id: seat.ticketType };
      });
      const reservationId = await saveReservation({
        seanceId: this.seance.id,
        tickets,
      });
      if (reservationId) {
        $router.push({ name: "ReservationSummary", params: { reservationId } });
        this.resetReservation();
      }
    },
  },
});
