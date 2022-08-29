<template>
  <div class="screenings">
    <div class="screenings__header mx-sm-24">
      <SectionTitle variation="48-64">Screenings:</SectionTitle>
      <SectionTitle variation="48-64" color="bombay" class="mb-32">{{
        dateString
      }}</SectionTitle>
    </div>
    <div class="screenings__filters mb-64 mx-sm-24">
      <div class="screenings__filters-day">
        <SelectDayFilter @updateCurrentDate="updateCurrentDate" />
      </div>
      <div class="screenings__filters-movie">
        <CustomSelect
          label="Movie"
          v-model="selectedFilter"
          :options="filters"
        />
      </div>
    </div>
    <MovieList
      v-if="deateMovieSeances && deateMovieSeances.length"
      :movies="filteredMovieSeances"
    />
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import SelectDayFilter from "./SelectDayFilter.vue";
import { useWeekdays } from "@composables/useWeekdays";
import { useSeanceStore } from "@/stores/seances";
import SectionTitle from "@components/common/SectionTitle.vue";
import MovieList from "@components/common/MovieList.vue";
import CustomSelect from "../common/CustomSelect.vue";
import { storeToRefs } from "pinia";

export default {
  components: { SectionTitle, MovieList, CustomSelect, SelectDayFilter },
  setup() {
    const selectedFilter = ref(null);
    const weekdays = useWeekdays();
    const currentDate = ref(new Date());

    function updateCurrentDate(newDate) {
      currentDate.value = new Date(newDate);
      seanceStore.getDateSeances(newDate);
    }

    const dateString = computed(
      () =>
        `${weekdays[currentDate.value.getDay()].fullName} ${currentDate.value
          .toLocaleDateString()
          .replace(/\./g, "/")}`
    );

    const seanceStore = useSeanceStore();

    onMounted(async () => {
      await seanceStore.getDateSeances(currentDate.value);
    });
    const { deateMovieSeances } = storeToRefs(seanceStore);
    const filters = computed(() => {
      const movieFilters = deateMovieSeances.value.map((item) => {
        const { id, title } = item;
        return { value: id, label: title };
      });
      return [{ label: "All", value: null }, ...movieFilters];
    });
    const filteredMovieSeances = computed(() => {
      if (selectedFilter.value) {
        return deateMovieSeances.value.filter(
          (movie) => movie.id === selectedFilter.value
        );
      }
      return deateMovieSeances.value;
    });
    return {
      dateString,
      selectedFilter,
      filters,
      deateMovieSeances,
      updateCurrentDate,
      filteredMovieSeances,
    };
  },
};
</script>
<style scoped lang="scss">
.screenings__filters {
  @include flex(column, false, start);
  @include lg {
    @include flex(row, space-between);
  }
  &-day {
    width: 100%;
    @include lg {
      width: 79%;
    }
  }
  &-movie {
    width: 100%;
    margin-top: 10px;
    @include lg {
      min-width: 325px;
      width: 31%;
    }
  }
}
</style>
