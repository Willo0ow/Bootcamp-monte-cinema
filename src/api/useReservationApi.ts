import axios from "@/axios";
import { RESERVATIONS } from "@/api/endpoints.js";

export const saveReservation = async ({ seanceId, tickets }) => {
  try {
    const res = await axios.post(`/${RESERVATIONS}/online`, {
      seance_id: seanceId,
      tickets,
    });
    return res.data.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const retrieveReservation = async (reservationId) => {
  try {
    const res = await axios.get(`/${RESERVATIONS}/${reservationId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const retrieveUserReservations = async (userEmail: string) => {
  try {
    const res = await axios.get(
      `/${RESERVATIONS}?user_email=${userEmail}&page=1&per_page=100`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export interface UserReservation {
  id: number;
  movie_title: string;
  seance_datetime: string;
  seance_id: number;
  status: {
    id: number;
    name: string;
  };
  tickets: Array<Ticket>;
  user_email: string;
  user_id: number;
}

export interface Ticket {
  id: number;
  price: string;
  seat: string;
  type: string;
}
