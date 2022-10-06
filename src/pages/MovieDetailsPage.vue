<template>
  <div class="movie">
    <BreadCrumbs :steps="breadcrumbSteps" :back-route="{ name: 'Movies' }" />
    <div class="movie__details">
      <div class="movie__details-wrapper">
        <SectionTitle>{{ movie?.title }}</SectionTitle>
        <div class="movie__details-basics">
          <CustomChip class="movie__details-chip">{{
            movie?.genre.name
          }}</CustomChip>
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
    <div class="movie__screenings">
      <SectionTitle class="movie__screenings-title" variation="32-32"
        >Screenings:</SectionTitle
      >
      <SectionTitle
        class="movie__screenings-title"
        variation="32-32"
        color="bombay"
        >{{ dateString }}</SectionTitle
      >
      <SelectDayFilter
        :noLabel="true"
        @updateCurrentDate="updateCurrentDate"
      ></SelectDayFilter>
      <MovieCardDetailed
        v-if="!!movie"
        :movie="movieData"
        class="movie__screenings-card"
      />
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
import { useMeta } from "vue-meta";

export default {
  setup() {
    const route = useRoute();

    const movie = ref(null);
    const meta = computed(() => ({ title: movie.value?.title || "" }));
    useMeta(meta);

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

    const breadcrumbSteps = computed(() => [
      { text: "Movies", isLink: true, path: "Movies" },
      { text: movie.value?.title || "", isLink: false },
    ]);

    const dateString = computed(() => formatDateString(currentDate.value));

    return {
      breadcrumbSteps,
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
    @include mx-screen-sm-only(24px);
    margin-top: 64px;
    margin-bottom: 64px;
    @include breakpoint-md-plus {
      display: flex;
    }
    &-wrapper {
      @include breakpoint-md-plus {
        margin-right: 32px;
        max-width: 600px;
      }
    }
    &-basics {
      margin-top: 32px;
      margin-bottom: 24px;
      @include flex(row, start, center);
    }
    &-chip {
      margin-right: 16px;
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
      @include breakpoint-md {
        height: 400px;
      }
    }
  }
  &__screenings {
    @include mx-screen-sm-only(24px);
    &-title {
      &:nth-child(2) {
        margin-bottom: 32px;
      }
    }
    &-card {
      margin-top: 64px;
    }
  }
}
.dot-divider {
  margin: 0 8px;
}
</style>
