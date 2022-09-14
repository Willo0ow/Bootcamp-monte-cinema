<template>
  <div class="hall-plan">
    <div class="hall-plan__seats">
      <div class="hall-plan__rows-container">
        <div
          class="hall-plan__row"
          v-for="(row, label) in hallMatrix"
          :key="label"
        >
          <div class="hall-plan__row-label">{{ label }}</div>
          <div
            class="hall-plan__seat"
            @click="toggleSeat(seat.seat)"
            v-for="seat in row"
            :class="getSeatClasses(seat)"
            :key="seat.column"
          >
            {{ seat.column }}
          </div>
          <div class="hall-plan__row-label">{{ label }}</div>
        </div>
      </div>
    </div>
    <div class="hall-plan__actions">
      <CustomButton
        size="56"
        class="hall-plan__btn"
        @click="saveSelectedSeats"
        :disabled="selectedSeats.length === 0"
        >Choose {{ selectedSeats.length || "" }} seats</CustomButton
      >
    </div>
  </div>
</template>

<script>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import CustomButton from "@components/common/CustomButton.vue";
export default {
  components: { CustomButton },
  setup() {
    const reservationStore = useReservationStore();
    const { hallMatrix, selectedSeatsRaw } = storeToRefs(reservationStore);
    const selectedSeats = ref(selectedSeatsRaw.value);
    function toggleSeat(seatNumber) {
      const seatIndex = selectedSeats.value.findIndex(
        (element) => element === seatNumber
      );
      if (seatIndex < 0) selectedSeats.value.push(seatNumber);
      else selectedSeats.value.splice(seatIndex, 1);
    }
    function saveSelectedSeats() {
      reservationStore.selectSeats(selectedSeats.value);
    }
    function getSeatClasses(seat) {
      return {
        "hall-plan__seat--taken": seat.taken,
        "hall-plan__seat--selected": selectedSeats.value.includes(seat.seat),
      };
    }
    return {
      hallMatrix,
      selectedSeats,
      toggleSeat,
      getSeatClasses,
      saveSelectedSeats,
    };
  },
};
</script>

<style lang="scss" scoped>
.hall-plan {
  &__seats {
    overflow-x: scroll;
    padding: 24px;
    @include font-roboto-mono(16px, 500, 32px, $gray-tuna);
    @include breakpoint-sm {
      box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
        0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
        0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
      border-radius: 8px;
      padding: 40px;
    }
  }
  &__rows-container {
    min-width: fit-content;
  }
  &__row {
    @include flex(row, center);
    &-label {
      width: 32px;
      height: 32px;
      text-align: center;
      vertical-align: middle;
      flex-shrink: 0;
      &:first-child {
        margin-right: 16px;
        @include breakpoint-md {
          margin-right: 40px;
        }
      }
      &:last-child {
        display: none;
        @include breakpoint-sm {
          display: block;
          margin-left: 16px;
        }
        @include breakpoint-md {
          margin-left: 40px;
        }
      }
    }
  }
  &__seat {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    background-color: $red-cosmos;
    text-align: center;
    vertical-align: middle;
    flex-shrink: 0;
    &:not(:nth-last-child(2)) {
      margin-right: 11px;
    }
    &--taken {
      background-color: $gray-jumbo;
      color: $snow-white;
    }
    &--selected {
      background-color: $cherry-red;
      color: $snow-white;
    }
  }
  &__actions {
    @include flex(row, end, center);
    @include mx-screen-sm-only(24px);
    margin-bottom: 64px;
  }
  &__btn {
    margin-top: 24px;
    width: 100%;
    @include breakpoint-sm {
      width: fit-content;
      margin-top: 64px;
    }
  }
}
</style>
