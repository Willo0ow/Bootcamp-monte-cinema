<template>
  <div class="reservation-summary" v-if="reservation">
    <div class="reservation-summary__header">
      <SectionTitle class="reservation-summary__header-title" variation="40-48"
        >Hell yeah!</SectionTitle
      >
      <SectionTitle
        class="reservation-summary__header-title"
        variation="40-48"
        color="red"
        >You booked {{ reservation.ticketsCount }} tickets</SectionTitle
      >
    </div>
    <div class="reservation-summary__ticket-list">
      <ReservationTicket
        v-for="ticket in reservation.tickets"
        :key="ticket.id"
        :movie-title="reservation.movie"
        :time="reservation.time"
        :ticket="ticket"
      />
    </div>
    <div class="reservation-summary__actions">
      <CustomButton
        size="56"
        :to="{ name: 'Home' }"
        class="reservation-summary__actions-btn"
        >Go to Homepage</CustomButton
      >
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import CustomButton from "@components/common/CustomButton.vue";
import { retrieveReservation } from "@/api/useReservationApi";
import { useRoute } from "vue-router";
import { formatSeanceDatetime } from "@helpers/useFormatSeanceDatetime";
import ReservationTicket from "@/components/Reservation/ReservationTicket.vue";
export default {
  setup() {
    const path = useRoute();
    const reservation = ref(null);
    onBeforeMount(async () => {
      const reservationData = await retrieveReservation(
        path.params.reservationId
      );
      reservation.value = formatReservationData(reservationData);
    });

    function formatReservationData(reservationData) {
      const { movie_title, seance_datetime, tickets } = reservationData;
      return {
        movie: movie_title,
        time: formatSeanceDatetime(seance_datetime),
        tickets: tickets.map((ticket) => {
          const { id, seat, type, price } = ticket;
          return {
            id,
            seat,
            row: seat.slice(0, 1),
            column: seat.slice(1),
            typeLabel: `${type} - $${price}`,
          };
        }),
        ticketsCount: tickets.length,
      };
    }

    return { reservation };
  },
  components: { SectionTitle, ReservationTicket, CustomButton },
};
</script>

<style lang="scss" scoped>
.reservation-summary {
  @include mx-screen-sm-only(24px);
  @include font-roboto(16px, 400, 19px, $gray-charade);
  &__header {
    margin-top: 64px;
    text-align: center;
    @include breakpoint-sm {
      text-align: start;
    }
  }
  &__ticket-list {
    margin-top: 64px;
  }
  &__actions {
    @include flex(row, center, center);
    @include breakpoint-sm {
      @include flex(row, end, center);
    }
    margin-bottom: 64px;
    margin-top: 64px;
    &-btn {
      width: 100%;
      @include breakpoint-sm {
        width: fit-content;
      }
    }
  }
}
</style>
