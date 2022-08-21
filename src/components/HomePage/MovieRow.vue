<template>
  <div class="mb-64">
    <div class="actions">
      <CapitalLink color="dark-grey">Soon in the cinema</CapitalLink>
      <CapitalLink color="red" href="#">See all</CapitalLink>
    </div>
    <div class="movies">
      <MovieCard
        v-for="movie in reducedMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>
<script>
import CapitalLink from "@components/common/CapitalLink.vue";
import MovieCard from "@components/common/MovieCard.vue";
import { useMovieStore } from "../../stores/movies";
import { storeToRefs } from "pinia";
import { computed } from "vue";
export default {
  components: { CapitalLink, MovieCard },
  setup() {
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);
    const reducedMovies = computed(() =>
      movies.value.reduce((soonMovies, movie) => {
        const { id, title, length, tag, image } = movie;
        if (soonMovies.length < 3) {
          soonMovies.push({
            id,
            title,
            length,
            tag,
            image,
          });
        }
        return soonMovies;
      }, [])
    );
    return {
      movies,
      reducedMovies,
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
