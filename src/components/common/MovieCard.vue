<template>
  <div class="card">
    <CardTitle size="36">{{ movie.title }}</CardTitle>
    <CardSubtitle>{{ movie.length }}</CardSubtitle>
    <div class="card__image">
      <img :src="imgUrl" />
    </div>
    <div class="card__tags">
      <CustomChip v-for="tag of movie.tags" :key="tag">{{ tag }}</CustomChip>
    </div>
  </div>
</template>
<script>

import { computed } from "vue";
import CardTitle from "./CardTitle.vue";
import CardSubtitle from "./CardSubtitle.vue";
import CustomChip from "./CustomChip.vue";
export default {
  components: { CardTitle, CardSubtitle, CustomChip },
  props: {
    movie: { type: Object, required: true },
  },
  setup(props) {
    const imgUrl = computed(
      () =>
        new URL(`/src/assets/images/${props.movie.image}`, import.meta.url).href
    );

    return {
      imgUrl,
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  display: inline-block;
}
.card__image {
  margin: 18px 0;
}
.card__tags {
  font-size: 22px;
}
</style>
