<template>
  <div class="title"><slot /></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  @include font-eczar(80px, 600, 102%, $gray-tuna);
  letter-spacing: -0.01em;

  &[color="bombay"] {
    color: $gray-bombay;
  }
  &[size="64"] {
    font-size: 64px;
  }
}
</style>
