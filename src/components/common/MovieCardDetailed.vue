<template>
  <div class="card">
    <div class="card__image">
      <img :src="imgUrl" />
    </div>
    <div class="card__details">
      <div>
        <CardTitle>{{ movie.title }}</CardTitle>
        <div class="details__basics">
          <div class="details__tags">
            <CustomChip v-for="tag of movie.tags" :key="tag">{{ tag }}</CustomChip>
          </div>
          <CardSubtitle>{{ movie.length }}</CardSubtitle>
        </div>
      </div>
      <div class="details__actions">
        <CustomButton
          class="mr-8"
          v-for="seance in movie.screenings"
          :key="seance"
          outlined
          @click="selectScreening(seance)"
          >{{ seance }}</CustomButton
        >
      </div>
    </div>
  </div>
</template>
<script>

import CustomButton from "./CustomButton.vue";
import CardTitle from "./CardTitle.vue";
import CardSubtitle from "./CardSubtitle.vue";
import CustomChip from "./CustomChip.vue";
export default {
  components: { CardTitle, CardSubtitle, CustomChip, CustomButton },
  props: {
    movie: { type: Object, required: true },
  },
  setup(props) {
    const imgUrl = new URL(
      `/src/assets/images/small/${props.movie.image}`,
      import.meta.url
    ).href;

    function selectScreening(seance) {
      console.log(seance);
    }

    return {
      imgUrl,
      selectScreening,
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
  display: flex;
}
.card__image {
  margin-right: 40px;
}
.details__tags {
  font-size: 22px;
  display: inline-block;
  margin-right: 16px;
}
.details__basics {
  display: flex;
  align-items: center;
}
.details__actions {
  display: flex;
}
.card__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
