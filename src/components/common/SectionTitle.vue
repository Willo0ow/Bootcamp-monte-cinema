<template>
  <div class="title"><slot /></div>
</template>
<script>
export default {
  props: {
    fontSize: {
      type: Object,
      default: () => ({ default: "80px", small: "48px" }),
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  @include font-eczar(v-bind("fontSize.small"), 600, 102%, $gray-tuna);
  letter-spacing: -0.01em;
  @include sm {
    font-size: v-bind("fontSize.default");
  }
  &[color="bombay"] {
    color: $gray-bombay;
  }
}
</style>
