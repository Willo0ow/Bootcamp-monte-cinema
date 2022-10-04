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
    @include breakpoint-sm {
      font-size: 80px;
    }
  }
  &--48-64 {
    @include font-eczar(48px, 600, 102%, $gray-tuna);
    @include breakpoint-sm {
      font-size: 64px;
    }
  }
  &--40-64 {
    @include font-eczar(40px, 600, 102%, $gray-tuna);
    @include breakpoint-sm {
      font-size: 64px;
    }
  }
  &--32-32 {
    @include font-eczar(32px, 600, 102%, $gray-tuna);
    @include breakpoint-sm {
      font-size: 32px;
    }
  }
  &--24-32-48 {
    @include font-eczar(24px, 600, 102%, $gray-tuna);
    @include breakpoint-md {
      font-size: 32px;
    }
    @include breakpoint-md-plus {
      font-size: 48px;
    }
  }
  &--40-48 {
    @include font-eczar(40px, 600, 102%, $gray-tuna);
    @include breakpoint-sm {
      font-size: 48px;
    }
  }
  &--40-60-80 {
    @include font-eczar(40px, 600, 102%, $gray-tuna);
    @include breakpoint-sm {
      font-size: 55px;
    }
    @include breakpoint-md {
      font-size: 80px;
    }
  }
  &[color="bombay"] {
    color: $gray-bombay;
  }
  &[color="red"] {
    color: $red-bittersweet;
  }
}
</style>
