<template>
  <div class="">
    <SectionTitle size="64">Screenings:</SectionTitle>
    <SectionTitle size="64" color="bombay">{{ today }}</SectionTitle>
    <MovieList :movies="movies"></MovieList>
  </div>
</template>
<script>
import { useWeekdays } from "@composables/useWeekdays";
import { useTestMovies } from "./useTestMovies";
import SectionTitle from "@components/common/SectionTitle.vue";
import MovieList from "@components/common/MovieList.vue";
export default {
  components: { SectionTitle, MovieList },
  setup() {
    const weekdays = useWeekdays();
    const currentDate = new Date();
    const today = `${weekdays[currentDate.getDay()]} ${currentDate
      .toLocaleDateString()
      .replace(/\./g, "/")}`;

    const movies = useTestMovies();
    return {
      today,
      movies,
    };
  },
};
</script>
