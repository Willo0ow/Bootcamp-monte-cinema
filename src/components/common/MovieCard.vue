<template>
  <div class="card">
    <CardTitle :text="movie.title" />
    <CardSubtitle :text="movie.length" />
    <div class="card__image">
      <img :src="imgUrl" />
    </div>
    <div class="card__actions">
      <CustomChip
        v-for="action of movie.actions"
        :key="action"
        :text="action"
      ></CustomChip>
    </div>
  </div>
</template>
<script>
import { CardTitle, CardSubtitle, CustomChip } from "./index";
export default {
  components: { CardTitle, CardSubtitle, CustomChip },
  props: {
    movie: { type: Object, required: true },
  },
  setup(props) {
    const imgUrl = new URL(
      `/src/assets/images/${props.movie.image}`,
      import.meta.url
    ).href;
    console.log(imgUrl);

    return {
      imgUrl,
    };
  },
};
</script>
<style lang="scss">
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
.card__actions {
  font-size: 22px;
}
</style>
