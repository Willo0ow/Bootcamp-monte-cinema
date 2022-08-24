<template>
  <div>
    <MovieCardDetailed
      class="mb-40"
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
.mb-40 {
  @include max-sm {
    margin-bottom: 0;
  }
}
</style>
