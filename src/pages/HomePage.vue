<template>
  <WelcomeSection class="mb-64" />
  <MovieRow />
  <MovieList />
  <ContactUs />
</template>
<script>
import {
  ContactUs,
  MovieList,
  MovieRow,
  WelcomeSection,
} from "../components/HomePage";
export default {
  components: { ContactUs, MovieList, MovieRow, WelcomeSection },
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
