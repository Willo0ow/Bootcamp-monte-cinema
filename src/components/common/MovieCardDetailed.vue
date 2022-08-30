<template>
  <div class="card">
    <div class="card__container">
      <div class="card__image">
        <img :src="movie.poster_url" />
      </div>
      <div class="card__details">
        <div>
          <CardTitle size="24" nowrap>{{ movie.title }}</CardTitle>
          <div class="card__basics">
            <div class="card__tags">
              <CustomChip v-for="tag in [movie.genre?.name]" :key="tag">{{
                tag
              }}</CustomChip>
            </div>
            <CardSubtitle>{{ movie.length }}</CardSubtitle>
          </div>
        </div>
        <div class="card__actions-desktop">
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
    <div class="card__actions-mobile">
      <CustomButton
        size="24"
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
  setup() {
    const selectedScreening = ref("");

    function selectScreening(seance) {
      selectedScreening.value = seance;
    }

    return {
      selectScreening,
      selectedScreening,
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  background: #ffffff;
  overflow-x: scroll;
  box-shadow: inset 0px -1px 0px #eaeaea;
  padding: 32px 16px;
  border-radius: 0;
  @include md {
    padding: 40px;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    border-radius: 8px;
  }
  &__container {
    @include flex();
  }
  &__image {
    margin-right: 16px;
    @include md {
      margin-right: 40px;
    }
    & img {
      width: 68px;
      height: 68px;
      object-fit: cover;
      object-position: 20% 10%;
      @include md {
        height: 132px;
        width: 98px;
      }
    }
  }
  &__tags {
    font-size: 22px;
    display: inline-block;
    margin-right: 16px;
  }
  &__basics {
    @include flex(row, false, center);
  }
  &__actions-desktop {
    display: none;
    @include md {
      @include flex();
    }
  }
  &__actions-mobile {
    margin-top: 21px;
    @include flex();
    @include md {
      display: none;
    }
  }
  &__details {
    @include flex(column, space-between);
  }
}
</style>
