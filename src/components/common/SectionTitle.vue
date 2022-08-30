<template>
  <div class="title" :class="`title--${variation}`"><slot /></div>
</template>
<script>
export default {
  props: {
    variation: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  letter-spacing: -0.01em;
  &--default {
    @include font-eczar(48px, 600, 102%, $gray-tuna);
    @include sm {
      font-size: 80px;
    }
  }
  &--48-64 {
    @include font-eczar(48px, 600, 102%, $gray-tuna);
    @include sm {
      font-size: 64px;
    }
  }
  &--40-64 {
    @include font-eczar(40px, 600, 102%, $gray-tuna);
    @include sm {
      font-size: 64px;
    }
  }
  &--32-32 {
    @include font-eczar(32px, 600, 102%, $gray-tuna);
    @include sm {
      font-size: 32px;
    }
  }
  &[color="bombay"] {
    color: $gray-bombay;
  }
}
</style>
