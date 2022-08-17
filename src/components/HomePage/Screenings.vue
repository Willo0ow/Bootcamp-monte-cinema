<template>
  <div class="">
    <SectionTitle size="64" text="Screenings:"></SectionTitle>
    <SectionTitle
      size="64"
      color="bombay"
      :text="today"
      class="mb-32"
    ></SectionTitle>
    <div class="filters-wrapper mb-64">
      <div>
        <SelectDayFilter></SelectDayFilter>
      </div>
      <div style="min-width: 300px">
        <CustomSelect
          v-model="selectedFilter"
          :options="filters"
        ></CustomSelect>
      </div>
    </div>

    <MovieList :movies="movies"></MovieList>
  </div>
</template>
<script>
import { SectionTitle, MovieList, CustomSelect } from "@components/common";
import { useWeekdays } from "@composables";
import { useTestMovies } from "./useTestMovies";
import { ref } from "vue";
import SelectDayFilter from "./SelectDayFilter.vue";
export default {
  components: { SectionTitle, MovieList, CustomSelect, SelectDayFilter },
  setup() {
    const selectedFilter = ref("All");
    const weekdays = useWeekdays();
    const currentDate = new Date();
    const today = `${weekdays[currentDate.getDay()].fullName} ${currentDate
      .toLocaleDateString()
      .replace(/\./g, "/")}`;

    const movies = useTestMovies();
    const filters = ["All", "Predator", "Commando", "Twins"];
    return {
      today,
      movies,
      selectedFilter,
      filters,
    };
  },
};
</script>
<style scoped lang="scss">
.filters-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
