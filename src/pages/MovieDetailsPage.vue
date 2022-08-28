<template>
  <div class="movie">
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Movies' }" />
    <div class="movie__details">
      <SectionTitle class="mb-32">{{ movie?.title }}</SectionTitle>
      <div class="details__basics">
        <CustomChip class="mr-16">{{ movie?.genre.name }}</CustomChip>
        <span class="details__basics--text">{{ releaseYear }}</span>
        <EllipseIcon class="dot-divider" />
        <span class="details__basics--text">{{
          movie?.length ? formatMovieLength(movie.length) : ""
        }}</span>
      </div>
      <SectionSubtitle class="details__description">{{
        movie?.description
      }}</SectionSubtitle>
      <img class="details__image" :src="movie?.poster_url" />
    </div>
    <div class="movie__screenings"></div>
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

    onBeforeMount(async () => {
      movie.value = await retrieveMovies(route.params.id);
    });

    const steps = computed(() => [
      { text: "Movies", isLink: true, path: "Movies" },
      { text: movie.value?.title || "", isLink: false },
    ]);
    return { steps, movie, releaseYear, formatMovieLength };
  },
  components: {
    BreadCrumbs,
    SectionTitle,
    CustomChip,
    EllipseIcon,
    SectionSubtitle,
  },
};
</script>

<style lang="scss" scoped>
.movie__details {
  margin: 24px;
}
.details__basics {
  margin-bottom: 24px;
  @include flex(row, start, center);
  &--text {
    @include font-roboto(14px, 700, 16px, $gray-jumbo);
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
}
</style>
