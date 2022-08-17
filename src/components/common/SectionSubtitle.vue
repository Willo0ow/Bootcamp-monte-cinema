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
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 170%;
  letter-spacing: 0.015em;
  color: $gray-tuna;
}
</style>
