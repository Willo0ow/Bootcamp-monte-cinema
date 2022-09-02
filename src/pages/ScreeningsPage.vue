<template>
  <div class="movies">
    <BreadCrumbs :steps="breadcrumbSteps" :back-route="{ name: 'Home' }" />
    <div class="movies__screenings">
      <Screenings />
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import Screenings from "../components/HomePage/Screenings.vue";
import { useMovieStore } from "@/stores/movies";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
export default {
  components: {
    BreadCrumbs,
    Screenings,
  },
  setup() {
    const breadcrumbSteps = [{ text: "Screenings", isLink: false }];
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);
    onMounted(async () => {
      if (!movies.value.length) {
        await movieStore.getMovies();
      }
    });
    return { breadcrumbSteps };
  },
};
</script>
<style scoped lang="scss">
.movies {
  &__screenings {
    margin-top: 64px;
  }
}
</style>
