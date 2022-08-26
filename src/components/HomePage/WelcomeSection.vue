<template>
  <div class="welcome">
    <div class="welcome__text">
      <SectionTitle class="mb-40 text__title"
        >Welcome to the best cinema in Monterail</SectionTitle
      >
      <div class="text__subtitles">
        <SectionSubtitle
          >Best movies, best experiences, best people.</SectionSubtitle
        >
        <SectionSubtitle class="mb-40"
          >And all that doesn't exist. Yikes.</SectionSubtitle
        >
      </div>
      <CustomButton class="button--book" href="/book" size="56"
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
  background: $wisp-pink;
}
.welcome__text {
  margin: 40px 32px;
  @include flex(column, false, start);
  @include md {
    margin: 80px;
  }
}
.text__subtitles {
  width: 100%;
}
.text__title {
  max-width: 710px;
  @include xs {
    text-align: center;
  }
}

.welcome__image {
  display: none;
  @media (min-width: 1300px) {
    display: block;
    min-width: 457px;
  }
}
.button--book {
  width: 100%;
  @include sm {
    width: fit-content;
  }
}
</style>
