<template>
  <WelcomeSection class="home__welcome" />
  <MovieRow />
  <Screenings title-variation="48-64" />
  <ContactUs />
</template>
<script>
import ContactUs from "@components/HomePage/ContactUs.vue";
import Screenings from "@components/HomePage/Screenings.vue";
import MovieRow from "@components/HomePage/MovieRow.vue";
import WelcomeSection from "@components/HomePage/WelcomeSection.vue";
import { onMounted } from "vue";
import { useMovieStore } from "@/stores/movies";
import { useMeta } from "vue-meta";
export default {
  components: {
    WelcomeSection,
    MovieRow,
    Screenings,
    ContactUs,
  },
  setup() {
    const { meta } = useMeta({
      title: "Home",
    });
    const movieStore = useMovieStore();
    onMounted(async () => {
      await movieStore.getMovies();
    });
    return {};
  },
};
</script>
<style scoped lang="scss">
.home {
  &__welcome {
    margin-bottom: 64px;
  }
}
</style>
