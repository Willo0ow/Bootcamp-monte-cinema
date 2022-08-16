<template>
  <div class="actions">
    <CapitalLink text="Soon in the cinema" color="dark-grey" />
    <CapitalLink text="See all" color="red" />
  </div>
  <div class="movies">
    <MovieCard v-for="movie of movies" :key="movie.id" :movie="movie" />
  </div>
</template>
<script>
import { CapitalLink, MovieCard } from "../common";
export default {
  components: { CapitalLink, MovieCard },
  setup() {
    const movies = [
      {
        id: 1,
        title: "Predator",
        length: "1h 30min",
        image: "predator.svg",
        imageComponent: "Predator",
        tags: ["Action"],
      },
      {
        id: 1,
        title: "Commando",
        length: "1h 30min",
        image: "commando.svg",
        imageComponent: "Commando",
        tags: ["Action"],
      },
      {
        id: 1,
        title: "Terminator 2",
        length: "1h 30min",
        image: "terminator2.svg",
        imageComponent: "Terminator",
        tags: ["Action"],
      },
    ];
    return {
      movies,
    };
  },
};
</script>
<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.movies {
  display: flex;
  justify-content: space-between;
}
</style>
