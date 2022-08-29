<template>
  <div class="movie">
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Movies' }" />
    <div class="movie__details">
      <div class="details__basics--wrapper">
        <SectionTitle class="mb-32">{{ movie?.title }}</SectionTitle>
        <div class="details__basics">
          <CustomChip class="mr-16">{{ movie?.genre.name }}</CustomChip>
          <span class="details__basics--text">{{ releaseYear }}</span>
          <EllipseIcon class="dot-divider" />
          <span class="details__basics--text">{{ movie?.length }}</span>
        </div>
        <SectionSubtitle class="details__description">{{
          movie?.description
        }}</SectionSubtitle>
      </div>
      <img class="details__image" :src="movie?.poster_url" />
    </div>
    <div class="movie__screenings">
      <SectionTitle :font-size="titleSize">Screenings:</SectionTitle>
      <SectionTitle :font-size="titleSize" color="bombay" class="mb-32">{{
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
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import { useRoute } from "vue-router";
import useMoviesApi from "@/api/useMoviesApi";
import { computed, onBeforeMount, ref } from "vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomChip from "../components/common/CustomChip.vue";
import useFormatMovieLength from "@composables/useFormatMovieLength";
import EllipseIcon from "@assets/images/icons/ellipse.svg?component";
import SectionSubtitle from "../components/common/SectionSubtitle.vue";
import SelectDayFilter from "../components/HomePage/SelectDayFilter.vue";
import { useWeekdays } from "../composables/useWeekdays";
import useSeancesApi from "@/api/useSeancesApi.js";
import MovieCardDetailed from "../components/common/MovieCardDetailed.vue";
import useAddDateAndTimeToSeances from "@/composables/useAddDateAndTimeToSeances";

export default {
  setup() {
    const route = useRoute();

    const { retrieveMovies } = useMoviesApi();

    const { formatMovieLength } = useFormatMovieLength();

    const movie = ref(null);

    const releaseYear = computed(() =>
      movie.value?.release_date
        ? new Date(movie.value.release_date).getFullYear()
        : ""
    );

    const currentDate = ref(new Date());
    const { retrieveSeances } = useSeancesApi();
    const { addDateAndTimeToSeances } = useAddDateAndTimeToSeances();

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
      movie.value = await retrieveMovies(route.params.id);
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

    const weekdays = useWeekdays();
    const dateString = computed(
      () =>
        `${weekdays[currentDate.value.getDay()].fullName} ${currentDate.value
          .toLocaleDateString()
          .replace(/\./g, "/")}`
    );

    const titleSize = { default: "32px", small: "32px" };

    return {
      steps,
      movie,
      releaseYear,
      updateCurrentDate,
      currentDate,
      dateString,
      titleSize,
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
.movie__details {
  margin: 24px;
  @include md-plus {
    display: flex;
  }
}
.movie__screenings {
  margin: 24px;
}
.details__basics {
  margin-bottom: 24px;
  @include flex(row, start, center);
  &--text {
    @include font-roboto(14px, 700, 16px, $gray-jumbo);
  }
  &--wrapper {
    @include md-plus {
      margin-right: 32px;
      max-width: 600px;
    }
  }
}
.details__description {
  margin-bottom: 24px;
}
.dot-divider {
  margin: 0 8px;
}
.details__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 20% 10%;
  box-sizing: border-box;
  @include md {
    //height: 100%;
  }
}
</style>
