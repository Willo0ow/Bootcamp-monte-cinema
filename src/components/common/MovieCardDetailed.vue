<template>
  <div class="card">
    <div class="card__image">
      <img :src="movie.image" />
    </div>
    <div class="card__details">
      <div>
        <CardTitle size="24">{{ movie.title }}</CardTitle>
        <div class="details__basics">
          <div class="details__tags">
            <CustomChip v-for="tag in [movie.tag]" :key="tag">{{
              tag
            }}</CustomChip>
          </div>
          <CardSubtitle>{{ movie.length }}</CardSubtitle>
        </div>
      </div>
      <div class="details__actions">
        <CustomButton
          class="mr-8"
          v-for="seance in movie.seances"
          :key="seance.id"
          outlined
          @click="selectScreening(seance.id)"
          :class="{ selected: selectedScreening === seance.id }"
          >{{ seance.time }}</CustomButton
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
import { ref } from "vue";
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

    const selectedScreening = ref("");

    function selectScreening(seance) {
      selectedScreening.value = seance;
    }

    return {
      imgUrl,
      selectScreening,
      selectedScreening,
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
  @include flex();
}
.card__image {
  margin-right: 40px;
}
img {
  height: 132px;
  width: 98px;
}
.details__tags {
  font-size: 22px;
  display: inline-block;
  margin-right: 16px;
}
.details__basics {
  @include flex(row, false, center);
}
.details__actions {
  @include flex();
}
.card__details {
  @include flex(column, space-between);
}
</style>
