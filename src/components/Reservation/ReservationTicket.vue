<template>
  <div class="ticket">
    <div class="ticket__movie">
      <CustomLabel class="ticket__property-label">Movie</CustomLabel>
      <div>{{ movieTitle }}</div>
    </div>
    <div class="ticket__seat">
      <CustomLabel class="ticket__property-label">Seat</CustomLabel>
      <div>Row {{ ticket.row }}, Seat {{ ticket.column }}</div>
    </div>
    <div class="ticket__time">
      <CustomLabel class="ticket__property-label">Time</CustomLabel>
      <div>{{ time }}</div>
    </div>
    <div class="ticket__type">
      <CustomLabel class="ticket__property-label">Ticket Type</CustomLabel>
      <div>{{ ticket.typeLabel }}</div>
    </div>
    <div class="ticket__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomLabel from "@components/common/CustomLabel.vue";
interface Ticket {
  row: string;
  column: string;
  typeLabel: string;
}

defineProps<{
  ticket: Ticket;
  movieTitle: string;
  time: string;
}>();
</script>

<style lang="scss" scoped>
.ticket {
  @include font-roboto(16px, 400, 19px, $gray-charade);
  margin-bottom: 48px;
  display: grid;
  grid-template-areas: "movie actions" "seat actions" "time actions" "ticket actions";
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  @include breakpoint-md {
    grid-template-areas: "movie seat time ticket actions";
    grid-template-rows: auto;
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  }
  &__movie,
  &__seat,
  &__type,
  &__time {
    padding-right: 0;
    margin-bottom: 12px;
    @include breakpoint-md {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
  &__seat {
    grid-area: seat;
  }
  &__time {
    grid-area: time;
  }
  &__movie {
    grid-area: movie;
  }
  &__type {
    grid-area: ticket;
  }
  &__actions {
    grid-area: actions;
  }
  &__property-label {
    margin-bottom: 8px;
  }
}
</style>
