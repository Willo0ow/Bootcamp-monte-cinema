<template>
  <CustomLabel v-if="!noLabel">Day</CustomLabel>
  <div class="select-day__buttons">
    <CustomButton
      size="56"
      v-for="day in days"
      :key="day.date"
      outlined
      color="gray"
      @click="selectDay(day.date)"
      class="mr-8 select-day__button"
      :class="{ selected: selectedDay === day.date }"
      sm-size
      >{{ day.label }}</CustomButton
    >
    <DatePicker
      v-model="selectedDay"
      @update:modelValue="(event) => selectDay(event.toDateString())"
      color="red"
    >
      <template v-slot="{ togglePopover }">
        <CustomButton
          size="56"
          outlined
          rounded
          color="gray"
          class="mr-8"
          sm-size
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
import { useWeekdays } from "@helpers/useWeekdays";
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
  emits: ["updateCurrentDate"],
  props: {
    noLabel: { type: Boolean, default: false },
  },
  setup(props, context) {
    const weekdays = useWeekdays();
    const today = new Date();
    const days = [{ date: today.toDateString(), label: "Today" }];
    for (let offset = 1; offset < 6; offset++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + offset);
      days.push({
        date: nextDay.toDateString(),
        label: weekdays[nextDay.getDay()].short,
      });
    }
    const selectedDay = ref(today.toDateString());
    function selectDay(day) {
      selectedDay.value = day;
      context.emit("updateCurrentDate", day);
    }

    return {
      days,
      selectDay,
      selectedDay,
    };
  },
};
</script>
<style scoped lang="scss">
.select-day {
  &__buttons {
    padding-bottom: 10px;
    @include flex();
    overflow-x: scroll;
    @include lg {
      padding-bottom: 0;
    }
  }
  & button {
    align-self: center;
  }
  &__button {
    @include md {
      &:nth-last-child(3),
      &:nth-last-child(2) {
        display: none;
      }
    }
    @include lg {
      &:nth-last-child(3),
      &:nth-last-child(2) {
        display: none;
      }
    }
    @include xl {
      &:nth-last-child(3),
      &:nth-last-child(2) {
        @include flex();
      }
    }
  }
}
</style>
