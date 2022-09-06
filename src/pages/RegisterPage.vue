<template>
  <div class="register">
    <CredentialsSection

    ></CredentialsSection>
  </div>
</template>

<script>
import CredentialsSection from "../components/Register/CredentialsSection.vue";

export default {
  components: { CredentialsSection },
  setup() {
    return {  };
  },
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 470px;
  padding-top: 64px;
  @include breakpoint-md {
    max-width: 605px;
    padding-top: 120px;
  }
  margin: 0 auto 64px;
  box-sizing: border-box;
}
</style>
