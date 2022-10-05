<template>
  <LoadProgress v-if="isLoading" />
  <div class="user-reservations" v-else>
    <div class="user-reservations__upcoming">
      <SectionTitle class="user-reservations__section-title" variation="24"
        >Upcoming</SectionTitle
      >
      <ReservationTicket
        v-for="newTicket in reservations.upcoming"
        :key="newTicket.ticketId"
        :ticket="newTicket"
        :movie-title="newTicket.movieTitle"
        :time="newTicket.time"
      >
        <template #actions>
          <div class="user-reservations__actions">
            <CustomChip
              class="user-reservations__status"
              :class="{ 'chip--gray': newTicket.status.name !== 'Confirmed' }"
              >{{ newTicket.status.name }}</CustomChip
            >
            <CustomButton outlined color="gray" class="desktop-only"
              >Remove</CustomButton
            >
            <CustomButton rounded outlined color="gray" class="non-desktop"
              >x</CustomButton
            >
          </div>
        </template>
      </ReservationTicket>
    </div>
    <div class="user-reservations__past">
      <SectionTitle class="user-reservations__section-title" variation="24"
        >Past</SectionTitle
      >
      <ReservationTicket
        v-for="newTicket in reservations.past"
        :key="newTicket.ticketId"
        :ticket="newTicket"
        :movie-title="newTicket.movieTitle"
        :time="newTicket.time"
      ></ReservationTicket>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { retrieveUserReservations } from "@/api/useReservationApi";
import { ref, Ref, onMounted } from "vue";
import ReservationTicket from "@components/Reservation/ReservationTicket.vue";
import { formatSeanceDatetime } from "@helpers/useFormatSeanceDatetime";
import SectionTitle from "../common/SectionTitle.vue";
import CustomChip from "../common/CustomChip.vue";
import CustomButton from "../common/CustomButton.vue";
import LoadProgress from "@components/common/LoadProgress.vue";

const authStore = useAuthStore();
const { user: currentUser } = storeToRefs(authStore);

interface ReservationTicketObject {
  movieTitle: string;
  ticketId: number;
  seat: string;
  row: string;
  column: string;
  typeLabel: string;
  time: string;
  status: {
    id: number;
    name: string;
  };
  id: number;
}
interface Reservations {
  upcoming: Array<ReservationTicketObject>;
  past: Array<ReservationTicketObject>;
}
const reservations: Ref<Reservations> = ref({ upcoming: [], past: [] });

const isLoading: Ref<boolean> = ref(false);

const getUserReservations = async () => {
  isLoading.value = true;
  const retrievedReservations = await retrieveUserReservations(
    currentUser.value.email
  );
  reservations.value = retrievedReservations.reduce(
    (reservationGroups, reservation) => {
      const { id, movie_title, seance_datetime, status, tickets } = reservation;
      const isReservationPast = new Date(seance_datetime) < new Date();
      const seanceDateTime = formatSeanceDatetime(seance_datetime);
      const formattedTickets = tickets.map((ticket) => {
        const { id: ticketId, seat, type, price } = ticket;
        return {
          movieTitle: movie_title,
          ticketId,
          seat,
          row: seat.slice(0, 1),
          column: seat.slice(1),
          typeLabel: `${type} - $${price}`,
          time: seanceDateTime,
          status,
          id,
        };
      });
      if (isReservationPast) {
        reservationGroups.upcoming.push(...formattedTickets);
      } else {
        reservationGroups.upcoming.push(...formattedTickets);
      }
      return reservationGroups;
    },
    { upcoming: [], past: [] }
  );
  isLoading.value = false;
};

onMounted(async () => {
  await getUserReservations();
});
</script>

<style lang="scss" scoped>
.user-reservations {
  &__upcoming {
    margin-bottom: 80px;
  }
  &__actions {
    @include flex(row, space-between, center);
  }
  &__status {
    margin-right: 12px;
  }
  &__section-title {
    margin-bottom: 40px;
  }
}
.desktop-only {
  display: none;
  @include breakpoint-md-plus {
    display: block;
  }
}
.non-desktop {
  display: block;
  @include breakpoint-md-plus {
    display: none;
  }
}
</style>
