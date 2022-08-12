<template>
  <div class="welcome">
    <div class="welcome__text">
      <SectionTitle
        text="Welcome to the best cinema in Monterail"
        class="mb-40"
        style="margin-right: 100px"
      />
      <SectionSubtitle text="Best movies, best experiences, best people." />
      <SectionSubtitle
        class="mb-40"
        text="And all that doesn't exist. Yikes."
      />
      <CustomButton label="Book a ticket" href="/book" size="56" />
    </div>
    <div class="welcome__image">
      <Welcome />
    </div>
  </div>
</template>
<script>
import { SectionTitle, SectionSubtitle, CustomButton } from "../common";
import Welcome from "@assets/images/welcome.svg?component";

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
  display: flex;
  background: $wisp-pink;
}
.welcome__text {
  margin: 80px;
}

.welcome__image {
  min-width: 457px;
}
</style>
