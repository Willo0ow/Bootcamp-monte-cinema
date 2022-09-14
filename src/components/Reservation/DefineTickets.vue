<template>
  <div class="tickets">
    <div
      class="tickets__item"
      v-for="(seat, index) in selectedSeats"
      :key="seat.seat"
    >
      <div class="tickets__seat">
        <CustomLabel class="tickets__seat-label">Seat</CustomLabel>
        <div class="tickets__seat-details">
          <span>Row </span>
          <span class="tickets__seat-row">{{ seat.seat.slice(0, 1) }}</span>
          <span>, Seat </span>
          <span class="tickets__seat-column">{{ seat.seat.slice(1) }}</span>
        </div>
      </div>
      <div class="tickets__item-type">
        <CustomSelect
          :options="ticketsTable"
          label="ticket type"
          option-value="id"
          option-label="label"
          :model-value="seat.ticketType"
          @update:modelValue="reservationStore.updateTicketType($event, index)"
        />
      </div>
      <CustomButton class="tickets__item-btn" outlined color="gray" size="56"
        >Remove</CustomButton
      >
    </div>
    <CustomCheckbox
      class="tickets__terms"
      name="termsCheckbox"
      :required="true"
    >
      I accept <a href="#">Terms & Conditions</a></CustomCheckbox
    >
    <div class="tickets__buttons">
      <CustomButton
        class="tickets__button"
        v-model="areTermsAccepted"
        outlined
        color="gray"
        size="56"
        >Go Back</CustomButton
      >
      <CustomButton class="tickets__button" size="56" @click="bookTickets"
        >Book Tickets</CustomButton
      >
    </div>
  </div>
</template>

<script>
import { useTicketsTable } from "@helpers/useTicketsTable";
import CustomSelect from "@components/common/CustomSelect.vue";
import CustomLabel from "@components/common/CustomLabel.vue";
import CustomButton from "@components/common/CustomButton.vue";
import CustomCheckbox from "@components/common/CustomCheckbox.vue";
import { useReservationStore } from "../../stores/reservation";
import { storeToRefs } from "pinia";
import { ref } from "vue";
export default {
  components: { CustomSelect, CustomLabel, CustomButton, CustomCheckbox },
  setup() {
    const ticketsTable = useTicketsTable();
    const reservationStore = useReservationStore();
    const { selectedSeats } = storeToRefs(reservationStore);
    const areTermsAccepted = ref(false);
    function bookTickets() {
      if (areTermsAccepted.value) {
        reservationStore.bookTickets();
      }
    }
    return {
      ticketsTable,
      selectedSeats,
      reservationStore,
      areTermsAccepted,
      bookTickets,
    };
  },
};
</script>

<style lang="scss" scoped>
.tickets {
  @include mx-screen-sm-only(24px);
  margin-top: 64px;
  margin-bottom: 64px;
  &__item {
    @include flex(column, space-between, center);
    margin-bottom: 64px;
    @include breakpoint-md {
      margin-bottom: 0;
      @include flex(row, false, end);
    }
    & + & {
      margin-top: 24px;
    }
    &-type {
      min-width: 100%;
      margin-bottom: 24px;
      @include breakpoint-md {
        min-width: 250px;
        margin-bottom: 0;
      }
      @include breakpoint-md-plus {
        min-width: 350px;
      }
    }
    &-btn {
      margin-left: auto;
      width: 100%;
      @include breakpoint-md {
        width: fit-content;
      }
    }
  }
  &__seat {
    width: 100%;
    margin-bottom: 24px;
    box-sizing: border-box;
    @include breakpoint-md {
      margin-bottom: 0;
      width: fit-content;
      margin-right: 24px;
    }
    &-details {
      border-radius: 8px;
      background-color: $pink-wisp;
      @include font-roboto(18px, 400, 56px, $gray-tuna);
      width: 100%;
      @include breakpoint-md {
        width: 152px;
      }
      height: 56px;
      text-align: center;
      vertical-align: middle;
    }
    &-row,
    &-column {
      font-weight: 500;
    }
  }
  &__terms {
    margin-top: 64px;
  }
  &__buttons {
    @include flex(column-reverse);
    margin-top: 32px;
    @include breakpoint-md {
      margin-top: 64px;
      @include flex(row, space-between, false);
    }
  }
  &__button {
    width: 100%;
    @include breakpoint-md {
      width: fit-content;
    }
    &:first-child {
      margin-top: 24px;
      @include breakpoint-md {
        margin-top: 0;
      }
    }
  }
}
</style>
