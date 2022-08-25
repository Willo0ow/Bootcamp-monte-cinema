<template>
  <div>
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Home' }" class="mb-64" />
    <SectionTitle class="mb-32">All the movies</SectionTitle>
    <div class="movie-gallery">
      <CustomSelect
        label="category"
        option-value="id"
        option-label="name"
        :options="categories"
        v-model="selectedCategory"
      />
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomSelect from "../components/common/CustomSelect.vue";
import useMovieGenresApi from "../api/useMovieGenresApi";
import { onMounted, ref } from "vue";
export default {
  components: { BreadCrumbs, SectionTitle, CustomSelect },
  setup() {
    const steps = [{ text: "Movies", isLink: false }];
    const selectedCategory = ref();
    const { retrieveMovieGenres } = useMovieGenresApi();
    const categories = ref([]);
    onMounted(async () => {
      categories.value = await retrieveMovieGenres();
      categories.value.unshift({ id: 0, name: "All categories" });
      selectedCategory.value = 0;
    });

    return { steps, categories, selectedCategory };
  },
};
</script>
<style scoped lang="scss"></style>
