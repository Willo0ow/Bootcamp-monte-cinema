<template>
  <div class="">
    <div class="helper">
      <SectionTitle size="64">Screenings:</SectionTitle>
      <SectionTitle size="64" color="bombay" class="mb-32">{{
        dateString
      }}</SectionTitle>
    </div>
    <div class="filters-container mb-64">
      <div class="days-container">
        <SelectDayFilter @updateCurrentDate="updateCurrentDate" />
      </div>
      <div class="select-container">
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
.filters-container {
  @include flex(row, space-between);
  @include max-md {
    @include flex(column, false, start);
  }
  @include max-sm {
    margin-right: 24px;
    margin-left: 24px;
  }
}
.select-container {
  min-width: 325px;
  width: 31%;
  @include max-md {
    width: 100%;
    margin-top: 10px;
  }
}
.days-container {
  width: 79%;
  @include max-md {
    width: 100%;
  }
}
.helper {
  @include max-sm {
    margin-right: 24px;
    margin-left: 24px;
  }
}
</style>
