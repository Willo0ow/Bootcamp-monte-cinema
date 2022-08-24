<template>
  <div class="mb-64 movie-row">
    <div class="actions">
      <CapitalLink color="dark-grey">{{ soonText }}</CapitalLink>
      <CapitalLink color="red" href="#">See all</CapitalLink>
    </div>
    <div class="movies">
      <MovieCard
        v-for="(movie, index) in reducedMovies"
        :key="movie.id"
        :movie="movie"
        :class="{ 'not-last-card': index != reducedMovies.length - 1 }"
        style="max-width: 100%"
        class="hide-card"
      />
    </div>
  </div>
</template>
<script>
import CapitalLink from "@components/common/CapitalLink.vue";
import MovieCard from "@components/common/MovieCard.vue";
import { useMovieStore } from "../../stores/movies";
import { storeToRefs } from "pinia";
import { computed, inject } from "vue";

export default {
  components: { CapitalLink, MovieCard },
  setup() {
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);

    const windowWidth = inject("windowWidth");
    const soonText = computed(() =>
      windowWidth.value > 480 ? "Soon in the Cinema" : "Soon"
    );

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
      windowWidth,
      soonText,
    };
  },
};
</script>
<style lang="scss">
.movie-row {
  @include max-sm {
    margin-right: 24px;
    margin-left: 24px;
  }
  .actions {
    @include flex(row, space-between);
    margin-bottom: 24px;
  }
  .movies {
    @include flex(row, space-between);
    @include sm {
      @include flex(column, start);
    }
    @include xs {
      @include flex(column, start);
    }
  }
}
.not-last-card {
  margin-right: 40px;
  @include max-sm {
    margin-right: 0;
    margin-bottom: 24px;
  }
}
.hide-card {
  @include max-lg {
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(2) {
      margin-right: 0;
    }
  }
}
</style>
