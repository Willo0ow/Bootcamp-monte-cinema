<template>
  <div class="tickets">
    <div
      class="tickets__item"
      v-for="(seat, index) in selectedSeats"
      :key="seat.seat"
    >
      <div class="tickets__seat">
        <CustomLabel class="ticket__seat-label">Seat</CustomLabel>
        <div class="tickets__seat-details">
          <span>Row </span>
          <span class="tickets__seat-row">{{ seat.seat.slice(0, 1) }}</span>
          <span>, Seat </span>
          <span class="tickets__seat-column">{{ seat.seat.slice(1) }}</span>
        </div>
      </div>
      <div class="tickets__type">
        <CustomSelect
          :options="ticketsTable"
          label="ticket type"
          option-value="id"
          option-label="label"
          :model-value="seat.ticketType"
        />
      </div>
      <CustomButton class="tickets__remove-btn" outlined color="gray" size="56"
        >Remove</CustomButton
      >
    </div>
  </div>
  <CustomCheckbox name="termsCheckbox" :required="true">
    I accept <a href="#">Terms & Conditions</a></CustomCheckbox
  >
  <div class="buttons">
    <CustomButton outlined color="gray" size="56">Go Back</CustomButton>
    <CustomButton size="56">Book Tickets</CustomButton>
  </div>
</template>

<script>
import { useTicketsTable } from "@helpers/useTicketsTable";
import CustomSelect from "@components/common/CustomSelect.vue";
import CustomLabel from "@components/common/CustomLabel.vue";
import CustomButton from "@components/common/CustomButton.vue";
import CustomCheckbox from "@components/common/CustomCheckbox.vue";
export default {
  props: {
    selectedSeats: { type: Array, default: () => [] },
  },
  components: { CustomSelect, CustomLabel, CustomButton, CustomCheckbox },
  setup() {
    const ticketsTable = useTicketsTable();
    return { ticketsTable };
  },
};
</script>

<style lang="scss" scoped>
.tickets {
  margin-top: 64px;
  &__item {
    @include flex(row, false, end);
    & + & {
      margin-top: 24px;
    }
  }
  &__seat {
    margin-right: 24px;
    &-details {
      border-radius: 8px;
      background-color: $pink-wisp;
      @include font-roboto(18px, 400, 56px, $gray-tuna);
      width: 152px;
      height: 56px;
      text-align: center;
      vertical-align: middle;
    }
    &-row,
    &-column {
      font-weight: 500;
    }
  }
  &__type {
    min-width: 350px;
  }
  &__remove-btn {
    margin-left: auto;
  }
}
.buttons {
  margin-top: 64px;
  @include flex(row, space-between, false);
}
</style>
