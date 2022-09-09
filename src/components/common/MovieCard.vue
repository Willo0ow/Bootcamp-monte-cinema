<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="card"
    data-spec="movie-card"
  >
    <div>
      <CardTitle size="36">{{ movie.title }}</CardTitle>
    </div>
    <div>
      <CardSubtitle>{{ movie.length }}</CardSubtitle>
      <div class="card__image">
        <img :src="movie.poster_url" data-spec="card__image" />
      </div>
      <div class="card__tags">
        <CustomChip>{{ movie.genre?.name }}</CustomChip>
      </div>
    </div>
  </component>
</template>
<script>
import CardTitle from "@components/common/CardTitle.vue";
import CardSubtitle from "@components/common/CardSubtitle.vue";
import CustomChip from "@components/common/CustomChip.vue";
export default {
  components: { CardTitle, CardSubtitle, CustomChip },
  props: {
    movie: { type: Object, required: true },
    to: { type: [Object, String], default: "" },
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  flex: 1;
  @include flex(column, space-between);
  @include breakpoint-md {
    padding: 40px;
  }
  &__image {
    margin: 18px 0;
    & img {
      width: 100%;
      height: 191px;
      object-fit: cover;
      object-position: 20% 10%;
    }
  }
  &__tags {
    font-size: 22px;
  }
}
</style>
