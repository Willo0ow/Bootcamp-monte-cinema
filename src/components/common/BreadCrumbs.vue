<template>
  <div class="breadcrumbs">
    <CustomButton
      outlined
      sm-text
      color="gray"
      :to="backRoute"
      class="back__btn"
    >
      <ArrowLeftIcon class="btn__icon" />
      <span class="desktop-only">Back</span>
    </CustomButton>
    <template v-for="(step, index) in steps" :key="step.text">
      <component
        class="step mr-8"
        :is="step.isLink ? 'router-link' : 'span'"
        :color="step.isLink ? 'red' : 'gray'"
        :to="step.isLink ? step.path : ''"
        >{{ step.text }}</component
      >
      <ChevronRightIcon class="mr-8" v-if="isNotLast(index)" />
    </template>
  </div>
</template>
<script>
import CustomButton from "./CustomButton.vue";
import ArrowLeftIcon from "../icons/ArrowLeftIcon.vue";
import ChevronRightIcon from "@assets/images/icons/chevronRightIcon.svg?component";
export default {
  props: {
    steps: { type: Array, default: () => [] },
    backRoute: { type: [String, Object], defaul: () => ({ name: "Home" }) },
  },
  components: { CustomButton, ArrowLeftIcon, ChevronRightIcon },
  setup(props) {
    function isNotLast(index) {
      return props.steps.length - 1 !== index;
    }
    return { isNotLast };
  },
};
</script>
<style lang="scss" scoped>
.step {
  @include font-roboto-mono(16px, 500, 100%, $gray-tuna);
  letter-spacing: 1.5;
  &[color="red"] {
    color: $cherry-red;
  }
}
.breadcrumbs {
  @include flex(false, start, center);
  padding: 20px 24px;
  background-color: $pink-wisp;
}
.btn__icon {
  @include lg {
    margin-right: 16px;
  }
}
.back__btn {
  margin-right: 12px;
  @include lg {
    margin-right: 32px;
  }
}
</style>
