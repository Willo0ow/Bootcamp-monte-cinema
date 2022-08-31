<template>
  <div class="movie">
    <BreadCrumbs
      :steps="steps"
      :back-route="{ name: 'Movies' }"
      class="mb-64"
    />
    <div class="movie__details mx-sm-24 mb-64">
      <div class="movie__details-wrapper">
        <SectionTitle class="mb-32">{{ movie?.title }}</SectionTitle>
        <div class="movie__details-basics">
          <CustomChip class="mr-16">{{ movie?.genre.name }}</CustomChip>
          <span class="movie__details-text">{{ releaseYear }}</span>
          <EllipseIcon class="dot-divider" />
          <span class="movie__details-text">{{ movie?.length }}</span>
        </div>
        <SectionSubtitle class="movie__details-description">{{
          movie?.description
        }}</SectionSubtitle>
      </div>
      <img class="movie__details-image" :src="movie?.poster_url" />
    </div>
    <div class="movie__screenings mx-sm-24">
      <SectionTitle variation="32-32">Screenings:</SectionTitle>
      <SectionTitle variation="32-32" color="bombay" class="mb-32">{{
        dateString
      }}</SectionTitle>
      <SelectDayFilter
        :noLabel="true"
        @updateCurrentDate="updateCurrentDate"
      ></SelectDayFilter>
      <MovieCardDetailed v-if="!!movie" :movie="movieData" class="mt-64" />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@components/common/BreadCrumbs.vue";
import { useRoute } from "vue-router";
import { retrieveMovie } from "@/api/useMoviesApi";
import { computed, onBeforeMount, ref } from "vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import CustomChip from "@components/common/CustomChip.vue";
import { formatMovieLength } from "@helpers/useFormatMovieLength";
import EllipseIcon from "@assets/images/icons/ellipse.svg?component";
import SectionSubtitle from "@components/common/SectionSubtitle.vue";
import SelectDayFilter from "@components/HomePage/SelectDayFilter.vue";
import { retrieveSeances } from "@/api/useSeancesApi.js";
import MovieCardDetailed from "@components/common/MovieCardDetailed.vue";
import { addDateAndTimeToSeances } from "@helpers/useAddDateAndTimeToSeances";

import { formatDateString } from "@helpers/useFormatDateString";

export default {
  setup() {
    const route = useRoute();

    const movie = ref(null);

    const releaseYear = computed(() =>
      movie.value?.release_date
        ? new Date(movie.value.release_date).getFullYear()
        : ""
    );

    const currentDate = ref(new Date());

    const seances = ref([]);

    async function getSeances() {
      const res = await retrieveSeances({
        date: currentDate.value,
        movieId: route.params.id,
      });
      seances.value = addDateAndTimeToSeances(res);
    }

    async function updateCurrentDate(newDate) {
      currentDate.value = new Date(newDate);
      await getSeances();
    }

    onBeforeMount(async () => {
      movie.value = await retrieveMovie(route.params.id);
      movie.value.length = formatMovieLength(movie.value.length);
      await getSeances();
    });

    const movieData = computed(() =>
      movie.value
        ? {
            ...movie.value,
            seances: seances.value,
          }
        : null
    );

    const steps = computed(() => [
      { text: "Movies", isLink: true, path: "Movies" },
      { text: movie.value?.title || "", isLink: false },
    ]);

    const dateString = computed(() => formatDateString(currentDate.value));

    return {
      steps,
      movie,
      releaseYear,
      updateCurrentDate,
      currentDate,
      dateString,
      movieData,
      seances,
    };
  },
  components: {
    BreadCrumbs,
    SectionTitle,
    CustomChip,
    EllipseIcon,
    SectionSubtitle,
    SelectDayFilter,
    MovieCardDetailed,
  },
};
</script>

<style lang="scss" scoped>
.movie {
  &__details {
    margin-top: 24px;
    @include md-plus {
      display: flex;
    }
    &-wrapper {
      @include md-plus {
        margin-right: 32px;
        max-width: 600px;
      }
    }
    &-basics {
      margin-bottom: 24px;
      @include flex(row, start, center);
    }
    &-text {
      @include font-roboto(14px, 700, 16px, $gray-jumbo);
    }
    &-description {
      margin-bottom: 24px;
    }
    &-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: 20% 10%;
      box-sizing: border-box;
      @include md {
        height: 400px;
      }
    }
  }
}
.dot-divider {
  margin: 0 8px;
}
</style>
