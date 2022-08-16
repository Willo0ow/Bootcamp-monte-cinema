<template>
  <div class="">
    <SectionTitle size="64" text="Screenings:"></SectionTitle>
    <SectionTitle size="64" color="bombay" :text="today"></SectionTitle>
    <MovieList :movies="movies"></MovieList>
  </div>
</template>
<script>
import { SectionTitle, MovieList } from "@components/common";
import { useWeekdays } from "@composables";
import { useTestMovies } from "./useTestMovies";
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
