<template>
  <div class="welcome">
    <div class="welcome__text">
      <SectionTitle class="mb-40 mr-100" center
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
  components: {
    SectionTitle,
    SectionSubtitle,
    CustomButton,
    Welcome,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  @include flex();
  background: $pink-wisp;
}
.welcome__text {
  margin: 80px;
  @include max-sm {
    margin: 40px 32px;
    @include flex(column, false, center);
  }
}

.welcome__image {
  min-width: 457px;
  @include max-md {
    display: none;
  }
}
.mr-100 {
  margin-right: 100px;
  @include max-sm {
    margin-right: 0;
  }
}
</style>
