<template>
  <WelcomeSection class="mb-64" />
  <MovieRow />
  <Screenings />
  <ContactUs />
</template>
<script>
import ContactUs from "../components/HomePage/ContactUs.vue";
import Screenings from "../components/HomePage/Screenings.vue";
import MovieRow from "../components/HomePage/MovieRow.vue";
import WelcomeSection from "../components/HomePage/WelcomeSection.vue";
export default {
  components: { WelcomeSection, MovieRow, Screenings, ContactUs },
  setup() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
