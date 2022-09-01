<template>
  <div class="welcome">
    <div class="welcome__text">
      <SectionTitle class="welcome__title"
        >Welcome to the best cinema in Monterail</SectionTitle
      >
      <div class="welcome__subtitles">
        <SectionSubtitle class="welcome__subtitle"
          >Best movies, best experiences, best people.</SectionSubtitle
        >
        <SectionSubtitle class="welcome__subtitle"
          >And all that doesn't exist. Yikes.</SectionSubtitle
        >
      </div>
      <CustomButton class="welcome__book-button" href="/book" size="56"
        >Book a ticket</CustomButton
      >
    </div>
    <div class="welcome__image">
      <WelcomeImage />
    </div>
  </div>
</template>
<script>
import WelcomeImage from "@assets/images/welcome.svg?component";
import CustomButton from "@components/common/CustomButton.vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import SectionSubtitle from "@components/common/SectionSubtitle.vue";

export default {
  components: {
    SectionTitle,
    SectionSubtitle,
    CustomButton,
    WelcomeImage,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  @include flex(row, space-between);
  background: $pink-wisp;
  &__text {
    margin: 40px 32px;
    @include flex(column, false, start);
    @include breakpoint-md {
      margin: 80px;
    }
  }
  &__title {
    max-width: 710px;
    margin-bottom: 40px;
    @include breakpoint-xs {
      text-align: center;
    }
  }
  &__subtitles {
    width: 100%;
    margin-bottom: 40px;
  }
  &__subtitle {
    @include breakpoint-xs {
      text-align: center;
    }
  }
  &__image {
    display: none;
    @media (min-width: 1300px) {
      display: block;
      min-width: 457px;
    }
  }
  &__book-button {
    width: 100%;
    @include breakpoint-sm {
      width: fit-content;
    }
  }
}
</style>
