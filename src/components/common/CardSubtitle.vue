<template>
  <div class="card__subtitle">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card__subtitle {
  @include font-roboto(14px, 700, 16px, $gray-jumbo);
}
</style>
