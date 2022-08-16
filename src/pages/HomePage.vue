<template>
  <WelcomeSection class="mb-64" />
  <MovieRow />
  <Screenings />
  <ContactUs />
</template>
<script>
import {
  ContactUs,
  Screenings,
  MovieRow,
  WelcomeSection,
} from "../components/HomePage";
export default {
  components: { ContactUs, Screenings, MovieRow, WelcomeSection },
  setup() {
    const testData = "Homepage";
    return {
      testData,
    };
  },
};
</script>
<style scoped>
main {
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
}
</style>
