<template>
  <div class="movie-row">
    <div class="movie-row__actions">
      <CapitalLink color="dark-grey"
        >Soon <span class="desktop-only">in the cinema</span></CapitalLink
      >
      <CapitalLink color="red" href="#">See all</CapitalLink>
    </div>
    <div class="movie-row__movies">
      <MovieCard
        v-for="(movie, index) in reducedMovies"
        :key="movie.id"
        :movie="movie"
        :class="{
          'not-last-card': index != reducedMovies.length - 1,
        }"
        class="movie-row__card"
      />
    </div>
  </div>
</template>
<script>
import CapitalLink from "@components/common/CapitalLink.vue";
import MovieCard from "@components/common/MovieCard.vue";
import { useMovieStore } from "@/stores/movies";
import { storeToRefs } from "pinia";
import { computed } from "vue";

export default {
  components: { CapitalLink, MovieCard },
  setup() {
    const { movies } = storeToRefs(useMovieStore());

    const reducedMovies = computed(() => movies.value.slice(0, 3));
    return {
      movies,
      reducedMovies,
    };
  },
};
</script>
<style lang="scss">
.movie-row {
  @include mx-screen-sm-only(24px);
  margin-bottom: 64px;
  &__actions {
    @include flex(row, space-between);
    margin-bottom: 24px;
  }
  &__movies {
    @include flex(column, start);
    @include breakpoint-md {
      @include flex(row, space-between);
    }
  }
  &__card {
    margin-bottom: 24px;
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(2) {
      margin-right: 0;
    }
    @include breakpoint-xl {
      &:nth-child(3) {
        display: flex;
      }
      &:nth-child(2) {
        margin-right: 40px;
      }
    }
  }
}

.not-last-card {
  margin-right: 0;
  @include breakpoint-md {
    margin-right: 40px;
  }
}

.desktop-only {
  display: none;
  @include breakpoint-lg {
    display: inline-block;
  }
}
</style>
