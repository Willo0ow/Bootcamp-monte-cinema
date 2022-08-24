<template>
  <a class="tab-header">
    <slot />
  </a>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.tab-header {
  @include font-roboto(18px, 400, 21px, $gray-jumbo);
  letter-spacing: 0em;
  display: inline-block;
  width: 141px;
  text-align: center;
}
</style>
