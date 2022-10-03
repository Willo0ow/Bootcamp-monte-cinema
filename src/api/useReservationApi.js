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