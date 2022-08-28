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
          :clear-value="0"
        />
      </div>

      <MovieCard
        v-for="movie of filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomSelect from "../components/common/CustomSelect.vue";
import useMovieGenresApi from "../api/useMovieGenresApi";
import { onMounted, ref, computed } from "vue";
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

    const filteredMovies = computed(() => {
      const searchedMovies = !search.value
        ? movies.value
        : movies.value.filter((movie) =>
            movie.title
              .toLowerCase()
              .includes(search.value.toLowerCase().trim())
          );
      return selectedCategory.value === 0
        ? searchedMovies
        : searchedMovies.filter(
            (movie) => movie.genre.id === selectedCategory.value
          );
    });

    return { steps, categories, selectedCategory, search, filteredMovies };
  },
};
</script>
<style scoped lang="scss">
.movie__gallery {
  gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  & :deep(.card) {
    grid-area: span 1 / span 3;
  }
  @include lg {
    grid-template-columns: 1fr 1fr 1fr;
    & :deep(.card) {
      grid-area: span 1 / span 1;
    }
  }
}
.gallery__search {
  grid-column: 1 / span 4;
  @include lg {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
}
.gallery__filter {
  grid-column: 5 / span 2;
  @include lg {
    grid-column: 3 / span 1;
  }
}
</style>
