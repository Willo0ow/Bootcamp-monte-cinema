<template>
  <div class="screenings">
    <div class="screenings__header">
      <SectionTitle :variation="titleVariation">Screenings:</SectionTitle>
      <SectionTitle :variation="titleVariation" color="bombay">{{
        dateString
      }}</SectionTitle>
    </div>
    <div class="screenings__filters">
      <div class="screenings__filters-day">
        <SelectDayFilter @updateCurrentDate="updateCurrentDate" />
      </div>
      <div class="screenings__filters-movie">
        <CustomSelect
          label="Movie"
          v-model="selectedFilter"
          :options="filters"
          :clear-value="0"
        ></CustomSelect>
      </div>
    </div>
    <MovieList
      v-if="dateMovieSeances && dateMovieSeances.length"
      :movies="filteredMovieSeances"
    />
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import SelectDayFilter from "@components/HomePage/SelectDayFilter.vue";
import { useWeekdays } from "@helpers/useWeekdays";
import { useSeanceStore } from "@/stores/seances";
import SectionTitle from "@components/common/SectionTitle.vue";
import MovieList from "@components/common/MovieList.vue";
import CustomSelect from "@components/common/CustomSelect.vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
export default {
  components: { SectionTitle, MovieList, CustomSelect, SelectDayFilter },
  props: {
    titleVariation: {
      type: String,
      default: "default",
    },
  },
  setup() {
    const { d } = useI18n();
    const selectedFilter = ref(0);
    const weekdays = useWeekdays();
    const currentDate = ref(new Date());

    function updateCurrentDate(newDate) {
      currentDate.value = new Date(newDate);
      seanceStore.getDateSeances(newDate);
    }

    const dateString = computed(
      () =>
        `${weekdays[currentDate.value.getDay()].fullName} ${d(
          currentDate.value
        )}`
    );

    const seanceStore = useSeanceStore();

    onMounted(async () => {
      await seanceStore.getDateSeances(currentDate.value);
    });
    const { dateMovieSeances } = storeToRefs(seanceStore);
    const filters = computed(() => {
      const movieFilters = dateMovieSeances.value.map((item) => {
        const { id, title } = item;
        return { value: id, label: title };
      });
      return [{ label: "All", value: 0 }, ...movieFilters];
    });
    const filteredMovieSeances = computed(() => {
      if (selectedFilter.value) {
        return dateMovieSeances.value.filter(
          (movie) => movie.id === selectedFilter.value
        );
      }
      return dateMovieSeances.value;
    });
    return {
      dateString,
      selectedFilter,
      filters,
      dateMovieSeances,
      updateCurrentDate,
      filteredMovieSeances,
    };
  },
};
</script>
<style scoped lang="scss">
.screenings {
  &__header {
    @include mx-screen-sm-only(24px);
    margin-bottom: 32px;
  }
  &__filters {
    @include mx-screen-sm-only(24px);
    margin-bottom: 64px;
    @include flex(column, false, start);
    @include breakpoint-lg {
      @include flex(row, space-between);
    }
    &-day {
      width: 100%;
      @include breakpoint-lg {
        width: 79%;
      }
    }
    &-movie {
      width: 100%;
      margin-top: 10px;
      @include breakpoint-lg {
        margin-top: 0;
        min-width: 325px;
        width: 31%;
      }
    }
  }
}
</style>
