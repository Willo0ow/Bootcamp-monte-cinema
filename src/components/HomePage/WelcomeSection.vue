<template>
  <div class="welcome">
    <div class="welcome__text">
      <SectionTitle class="mb-40" style="margin-right: 100px"
        >Welcome to the best cinema in Monterail</SectionTitle
      >
      <SectionSubtitle
        >Best movies, best experiences, best people.</SectionSubtitle
      >
      <SectionSubtitle class="mb-40"
        >And all that doesn't exist. Yikes.</SectionSubtitle
      >
      <CustomButton href="/book" size="56">Book a ticket</CustomButton>
    </div>
    <div class="welcome__image">
      <Welcome />
    </div>
  </div>
</template>
<script>
import Welcome from "@assets/images/welcome.svg?component";
import CustomButton from "@components/common/CustomButton.vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import SectionSubtitle from "@components/common/SectionSubtitle.vue";

export default {
  components: { SectionTitle, SectionSubtitle, CustomButton, Welcome },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  @include flex();
  background: $wisp-pink;
}
.welcome__text {
  margin: 80px;
}

.welcome__image {
  min-width: 457px;
}
</style>
