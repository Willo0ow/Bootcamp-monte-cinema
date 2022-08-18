<template>
  <div class="mb-64">
    <div class="actions">
      <CapitalLink color="dark-grey">Soon in the cinema</CapitalLink>
      <CapitalLink color="red" href="#">See all</CapitalLink>
    </div>
    <div class="movies">
      <MovieCard v-for="movie of movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
<script>
import CapitalLink from "@components/common/CapitalLink.vue";
import MovieCard from "@components/common/MovieCard.vue";
export default {
  components: { CapitalLink, MovieCard },
  setup() {
    const movies = [
      {
        id: 1,
        title: "Predator",
        length: "1h 30min",
        image: "predator.svg",
        tags: ["Action"],
      },
      {
        id: 1,
        title: "Commando",
        length: "1h 30min",
        image: "commando.svg",
        tags: ["Action"],
      },
      {
        id: 1,
        title: "Terminator 2",
        length: "1h 30min",
        image: "terminator2.svg",
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
  @include flex(row, space-between);
  margin-bottom: 24px;
}
.movies {
  @include flex(row, space-between);
}
</style>
