<template>
  <div class="movies">
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Home' }" class="mb-64" />
    <div class="movie__screenings">
      <Screenings :titleSize="{ default: '80px', small: '48px' }" />
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
    const steps = [{ text: "Screenings", isLink: false }];
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);
    onMounted(async () => {
      if (!movies.value.length) {
        await movieStore.getMovies();
      }
    });
    return { steps };
  },
};
</script>
<style scoped lang="scss"></style>
