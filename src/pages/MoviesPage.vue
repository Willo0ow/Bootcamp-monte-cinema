<template>
  <div>
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Home' }" class="mb-64" />
    <SectionTitle class="mb-32">All the movies</SectionTitle>
    <div class="movie__gallery mb-64">
      <div class="gallery__search">
        <CustomInput
          v-model="search"
          label="search"
          placeholder="What are you looking for"
        >
          <template #appendIcon>
            <SearchIcon></SearchIcon>
          </template>
        </CustomInput>
      </div>
      <div class="gallery__filter">
        <CustomSelect
          label="category"
          option-value="id"
          option-label="name"
          :options="categories"
          v-model="selectedCategory"
        />
      </div>

      <MovieCard v-for="movie of movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomSelect from "../components/common/CustomSelect.vue";
import useMovieGenresApi from "../api/useMovieGenresApi";
import { onMounted, ref } from "vue";
import CustomInput from "../components/common/CustomInput.vue";
import SearchIcon from "@assets/images/icons/magnifyIcon.svg?component";
import MovieCard from "../components/common/MovieCard.vue";
import { useMovieStore } from "@/stores/movies";
import { storeToRefs } from "pinia";
export default {
  components: {
    BreadCrumbs,
    SectionTitle,
    CustomSelect,
    CustomInput,
    SearchIcon,
    MovieCard,
  },
  setup() {
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);
    const steps = [{ text: "Movies", isLink: false }];
    const selectedCategory = ref();
    const { retrieveMovieGenres } = useMovieGenresApi();
    const categories = ref([]);
    onMounted(async () => {
      if (!movies.value.length) {
        await movieStore.getMovies();
      }
      categories.value = await retrieveMovieGenres();
      categories.value.unshift({ id: 0, name: "All categories" });
      selectedCategory.value = 0;
    });
    const search = ref("");

    return { steps, categories, selectedCategory, search, movies };
  },
};
</script>
<style scoped lang="scss">
.movie__gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
.gallery__search {
  grid-column: 1 / span 2;
  grid-row: 1;
}
</style>
