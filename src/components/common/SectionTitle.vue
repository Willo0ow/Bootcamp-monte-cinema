<template>
  <div class="title"><slot /></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  @include font-eczar(48px, 600, 102%, $gray-tuna);
  letter-spacing: -0.01em;
  text-align: start;
  @include sm {
    font-size: 80px;
  }

  &[color="bombay"] {
    color: $gray-bombay;
  }
  &[size="64"] {
    font-size: 64px;
  }
}
</style>
