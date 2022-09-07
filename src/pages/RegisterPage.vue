<template>
  <div class="register">
    <CredentialsSection
      v-if="currentPanel === 'CredentialsSection'"
      @goToNextStep="goToNextStep"
    ></CredentialsSection>
    <AdditionalDetailsSection v-else></AdditionalDetailsSection>
  </div>
</template>

<script>
import CredentialsSection from "../components/Register/CredentialsSection.vue";
import AdditionalDetailsSection from "../components/Register/AdditionalDetailsSection.vue";
import { ref } from "vue";

export default {
  components: { CredentialsSection, AdditionalDetailsSection },
  setup() {
    const currentPanel = ref("AdditionalDetailsSection");
    function goToNextStep() {
      currentPanel.value = "AdditionalDetailsSection";
    }
    return { currentPanel, goToNextStep };
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
