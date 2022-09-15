<template>
  <div class="reservation-summary">
    <div class="reservation-summary__header">
      <SectionTitle class="reservation-summary__header-title" variation="40-48"
        >Hell yeah!</SectionTitle
      >
      <SectionTitle
        class="reservation-summary__header-title"
        variation="40-48"
        color="red"
        >You booked {{ ticketsCount }} tickets</SectionTitle
      >
    </div>
    <div class="reservation-summary__ticket-list">
      <div
        class="reservation-summary__ticket"
        v-for="ticket in tickets"
        :key="ticket.seat"
      >
        <div class="reservation-summary__ticket-movie">
          <CustomLabel>Movie</CustomLabel>
          <div>{{ movie.title }}</div>
        </div>
        <div class="reservation-summary__ticket-seat">
          <CustomLabel>Seat</CustomLabel>
          <div>Row {{ ticket.row }}, Seat {{ ticket.column }}</div>
        </div>
        <div class="reservation-summary__ticket-time">
          <CustomLabel>Time</CustomLabel>
          <div>{{ ticket.time }}</div>
        </div>
        <div class="reservation-summary__ticket-type">
          <CustomLabel>Ticket Type</CustomLabel>
          <div>{{ getTicketType(ticket.ticketType) }}</div>
        </div>
      </div>
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
import { computed } from "vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomLabel from "../components/common/CustomLabel.vue";
import { useTicketsTable } from "../helpers/useTicketsTable";
import CustomButton from "../components/common/CustomButton.vue";
export default {
  setup() {
    const ticketsCount = 2;
    const movie = { title: "Predator" };
    const tickets = [
      {
        row: "P",
        column: 10,
        seat: "P10",
        time: "Wednesday 16/02.2022 - 22:30",
        ticketType: 1,
      },
      {
        row: "P",
        column: 10,
        seat: "P10",
        time: "Wednesday 16/02.2022 - 22:30",
        ticketType: 1,
      },
      {
        row: "P",
        column: 10,
        seat: "P10",
        time: "Wednesday 16/02.2022 - 22:30",
        ticketType: 1,
      },
    ];
    const ticketsTable = useTicketsTable();
    function getTicketType(ticketTypeId) {
      return ticketsTable.find((type) => type.id === ticketTypeId).label;
    }
    return { ticketsCount, movie, tickets, getTicketType };
  },
  components: { SectionTitle, CustomLabel, CustomButton },
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
  &__ticket {
    margin-bottom: 48px;
    @include flex(column);
    @include breakpoint-md {
      margin-bottom: 24px;
      @include flex(row);
    }
    &-movie,
    &-seat,
    &-time {
      margin-bottom: 12px;
      @include breakpoint-md {
        margin-right: 30px;
      }
      @include breakpoint-md-plus {
        margin-right: 50px;
      }
    }
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
