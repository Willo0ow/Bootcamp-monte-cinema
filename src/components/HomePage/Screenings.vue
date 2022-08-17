<template>
  <div class="">
    <SectionTitle size="64">Screenings:</SectionTitle>
    <SectionTitle size="64" color="bombay" class="mb-32">{{
      today
    }}</SectionTitle>
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
import { ref } from "vue";
import SelectDayFilter from "./SelectDayFilter.vue";
import { useWeekdays } from "@composables/useWeekdays";
import { useTestMovies } from "./useTestMovies";
import SectionTitle from "@components/common/SectionTitle.vue";
import MovieList from "@components/common/MovieList.vue";
import CustomSelect from "../common/CustomSelect.vue";

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
