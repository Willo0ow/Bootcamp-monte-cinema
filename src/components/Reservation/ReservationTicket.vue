<template>
  <div class="ticket">
    <div class="ticket__movie">
      <CustomLabel>Movie</CustomLabel>
      <div>{{ movieTitle }}</div>
    </div>
    <div class="ticket__seat">
      <CustomLabel>Seat</CustomLabel>
      <div>Row {{ ticket.row }}, Seat {{ ticket.column }}</div>
    </div>
    <div class="ticket__time">
      <CustomLabel>Time</CustomLabel>
      <div>{{ time }}</div>
    </div>
    <div class="ticket__type">
      <CustomLabel>Ticket Type</CustomLabel>
      <div>{{ ticket.typeLabel }}</div>
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
  margin-bottom: 48px;
  @include flex(column);
  @include breakpoint-md {
    margin-bottom: 24px;
    @include flex(row);
  }
  &__movie,
  &__seat,
  &__time {
    margin-bottom: 12px;
    @include breakpoint-md {
      margin-right: 30px;
    }
    @include breakpoint-md-plus {
      margin-right: 50px;
    }
  }
}
</style>
