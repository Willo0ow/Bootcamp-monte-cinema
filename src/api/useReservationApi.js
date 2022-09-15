import axios from "@/axios";
import { RESERVATIONS } from "@/api/endpoints.js";

export const saveReservation = async ({ seanceId, tickets }) => {
  try {
    const res = await axios.post(`/${RESERVATIONS}/online`, {
      seance_id: seanceId,
      tickets,
    });
    return +res.status === 201;
  } catch (error) {
    console.log(error);
    return null;
  }
};
