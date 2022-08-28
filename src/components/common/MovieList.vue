<template>
  <div class="movie__list">
    <MovieCardDetailed
      class="list__item"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>
<script>
import MovieCardDetailed from "./MovieCardDetailed.vue";
export default {
  props: { movies: { type: Array, required: true } },
  components: { MovieCardDetailed },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.list__item {
  margin-bottom: 0;
  @include md {
    margin-bottom: 40px;
  }
}
</style>
