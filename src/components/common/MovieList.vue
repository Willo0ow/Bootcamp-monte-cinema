<template>
  <div>
    <MovieCardDetailed
      class="mb-40"
      v-for="movie in movies"
      :key="movie.title"
      :movie="movie"
    />
  </div>
</template>
<script>
import { MovieCardDetailed } from "@components/common";
export default {
  props: { movies: { type: Array, required: true } },
  components: { MovieCardDetailed },
  setup() {
    return {};
  },
};
</script>
