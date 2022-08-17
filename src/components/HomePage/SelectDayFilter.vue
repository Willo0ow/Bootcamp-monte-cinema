<template>
  <CustomLabel>Day</CustomLabel>
  <div class="filter-days">
    <CustomButton
      size="56"
      v-for="day in days"
      :key="day"
      outlined
      color="gray"
      @click="selectDay(day)"
      class="mr-8"
      :class="{ selected: selectedDay === day }"
      >{{ day }}</CustomButton
    >
    <DatePicker v-model="selectedDate" color="red">
      <template v-slot="{ togglePopover }">
        <CustomButton
          size="56"
          outlined
          rounded
          color="gray"
          class="mr-8"
          @click="togglePopover()"
        >
          <CalendarIcon />
        </CustomButton>
      </template>
    </DatePicker>
  </div>
</template>
<script>
import { DatePicker } from "v-calendar";
import CalendarIcon from "@icons/CalendarIcon.vue";
import { useWeekdays } from "@composables/useWeekdays";
import { ref } from "vue";
import CustomLabel from "@components/common/CustomLabel.vue";
import CustomButton from "@components/common/CustomButton.vue";

export default {
  components: {
    CustomLabel,
    CustomButton,
    CalendarIcon,
    DatePicker,
  },
  setup() {
    const weekdays = useWeekdays();
    const today = new Date();
    const days = ["Today"];
    for (let offset = 1; offset < 6; offset++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + offset);
      days.push(weekdays[nextDay.getDay()].short);
    }
    const selectedDay = ref("Today");
    function selectDay(day) {
      selectedDay.value = day;
    }
    const selectedDate = ref("");
    return {
      days,
      selectDay,
      selectedDay,
      selectedDate,
    };
  },
};
</script>
<style scoped lang="scss">
.filter-days {
  display: flex;
}
.filter-days button {
  align-self: center;
}
</style>
