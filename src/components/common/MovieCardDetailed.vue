<template>
  <div class="card">
    <div class="card__container">
      <div class="card__image">
        <img :src="movie.poster_url" />
      </div>
      <div class="card__details">
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
      <div class="card__actions">
        <slot name="cardActions">
          <CustomButton
            sm-size="24"
            class="card__actions-btn"
            v-for="seance in movie.seances"
            :key="seance.id"
            :to="{ name: 'MakeReservation', params: { seanceId: seance.id } }"
            outlined
            @click="selectScreening(seance.id)"
            :class="{ selected: selectedScreening === seance.id }"
            >{{ seance.time }}</CustomButton
          >
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@components/common/CustomButton.vue";
import CardTitle from "@components/common/CardTitle.vue";
import CardSubtitle from "@components/common/CardSubtitle.vue";
import CustomChip from "@components/common/CustomChip.vue";
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
  @include breakpoint-md {
    padding: 40px;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    border-radius: 8px;
  }
  &__container {
    display: grid;
    grid-template-areas: "image title" "image title" "actions actions";
    grid-template-rows: 46px 46px 34px;
    grid-template-columns: 84px 1fr;
    @include breakpoint-md {
      grid-template-areas: "image title" "image title" "image actions";
      grid-template-rows: 44px 44px 44px;
      grid-template-columns: 138px 1fr;
    }
  }
  &__image {
    grid-area: image;
    margin-right: 16px;
    @include breakpoint-md {
      margin-right: 40px;
    }
    & img {
      width: 68px;
      height: 68px;
      object-fit: cover;
      object-position: 20% 10%;
      @include breakpoint-md {
        height: 132px;
        width: 98px;
      }
    }
  }
  &__details {
    grid-area: title;
  }
  &__actions {
    grid-area: actions;
    @include flex(row, false, end);
    &-btn {
      margin-right: 8px;
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
}
</style>
