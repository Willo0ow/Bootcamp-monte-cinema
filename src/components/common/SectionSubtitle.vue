<template>
  <div class="subtitle">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.subtitle {
  @include font-roboto-mono(22px, 400, 170%);
  letter-spacing: 0.015em;
  color: $gray-tuna;
  @include max-sm {
    text-align: center;
  }
}
</style>
