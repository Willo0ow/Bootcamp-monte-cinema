<template>
  <div class="movie-list">
    <MovieCardDetailed
      class="movie-list__item"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>
<script>
import MovieCardDetailed from "@components/common/MovieCardDetailed.vue";
export default {
  props: { movies: { type: Array, required: true } },
  components: { MovieCardDetailed },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.movie-list {
  &__item {
    margin-bottom: 0;
    @include md {
      margin-bottom: 40px;
    }
  }
}
</style>
