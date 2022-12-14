<template>
  <div class="movies">
    <BreadCrumbs :steps="breadcrumbSteps" :back-route="{ name: 'Home' }" />
    <SectionTitle class="movies__title">All the movies</SectionTitle>
    <div class="movies__gallery">
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
        :movie="movie"
        class="gallery__card"
        v-for="movie of filteredMovies"
        :key="movie.id"
        :to="{ name: 'MovieDetails', params: { id: movie.id } }"
      />
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "@components/common/BreadCrumbs.vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import CustomSelect from "@components/common/CustomSelect.vue";
import { retrieveMovieGenres } from "@/api/useMovieGenresApi";
import { onMounted, ref, computed } from "vue";
import CustomInput from "@components/common/CustomInput.vue";
import SearchIcon from "@assets/images/icons/magnifyIcon.svg?component";
import MovieCard from "@components/common/MovieCard.vue";
import { useMovieStore } from "@/stores/movies";
import { storeToRefs } from "pinia";
import { useMeta } from "vue-meta";
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
    const { meta } = useMeta({
      title: "Movies",
    });
    const movieStore = useMovieStore();
    const { movies } = storeToRefs(movieStore);
    const breadcrumbSteps = [{ text: "Movies", isLink: false }];
    const selectedCategory = ref();
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

    return {
      breadcrumbSteps,
      categories,
      selectedCategory,
      search,
      filteredMovies,
    };
  },
};
</script>
<style scoped lang="scss">
.movies {
  &__title {
    @include mx-screen-sm-only(24px);
    margin-top: 64px;
    margin-bottom: 32px;
  }
  &__gallery {
    @include mx-screen-sm-only(24px);
    margin-bottom: 64px;
    @include breakpoint-md {
      gap: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    @include breakpoint-lg {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
.gallery__card {
  margin-bottom: 24px;
  @include breakpoint-md {
    grid-area: span 1 / span 3;
    margin-bottom: 0;
  }
  @include breakpoint-lg {
    grid-area: span 1 / span 1;
    margin-bottom: 0;
  }
}
.gallery__search {
  margin-bottom: 40px;
  @include breakpoint-md {
    margin-bottom: 0;
    grid-column: 1 / span 4;
  }
  @include breakpoint-lg {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
}
.gallery__filter {
  margin-bottom: 32px;
  @include breakpoint-md {
    margin-bottom: 0;
    grid-column: 5 / span 2;
  }
  @include breakpoint-lg {
    grid-column: 3 / span 1;
  }
}
</style>
