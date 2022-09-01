<template>
  <div class="breadcrumbs">
    <CustomButton
      outlined
      sm-text
      color="gray"
      :to="backRoute"
      class="breadcrumbs__back-btn"
    >
      <ArrowLeftIcon class="breadcrumbs__back-btn-icon" />
      <span class="desktop-only">Back</span>
    </CustomButton>
    <template v-for="(step, index) in steps" :key="step.text">
      <component
        class="breadcrumbs__step"
        :is="step.isLink ? 'router-link' : 'span'"
        :color="step.isLink ? 'red' : 'gray'"
        :to="step.isLink ? step.path : ''"
        >{{ step.text }}</component
      >
      <ChevronRightIcon class="breadcrumbs__icon" v-if="isNotLast(index)" />
    </template>
  </div>
</template>
<script>
import CustomButton from "@components/common/CustomButton.vue";
import ArrowLeftIcon from "@components/icons/ArrowLeftIcon.vue";
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
.breadcrumbs {
  @include flex(false, start, center);
  padding: 20px 24px;
  background-color: $pink-wisp;
  &__back-btn {
    margin-right: 12px;
    @include breakpoint-lg {
      margin-right: 32px;
    }
    &-icon {
      @include breakpoint-lg {
        margin-right: 16px;
      }
    }
  }
  &__step {
    margin-right: 8px;
    @include font-roboto-mono(16px, 500, 100%, $gray-tuna);
    letter-spacing: 1.5;
    &[color="red"] {
      color: $cherry-red;
    }
  }
  &__icon {
    margin-right: 8px;
  }
}
.desktop-only {
  display: none;
  @include breakpoint-lg {
    display: inline-block;
  }
}
</style>
