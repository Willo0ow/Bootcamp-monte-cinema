<template>
  <div class="register">
    <CredentialsSection
      v-if="currentPanel === 'CredentialsSection'"
      @goToNextStep="goToNextStep"
    />
    <AdditionalDetailsSection v-else />
  </div>
</template>

<script>
import CredentialsSection from "@components/Register/CredentialsSection.vue";
import AdditionalDetailsSection from "@components/Register/AdditionalDetailsSection.vue";
import { ref } from "vue";
import { useMeta } from "vue-meta";

export default {
  components: { CredentialsSection, AdditionalDetailsSection },
  setup() {
    const { meta } = useMeta({
      title: "Register",
    });
    const currentPanel = ref("CredentialsSection");
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
