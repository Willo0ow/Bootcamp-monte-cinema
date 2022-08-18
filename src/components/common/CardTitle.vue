<template>
  <div class="card__title" size="36">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card__title {
  margin-bottom: 8px;
  &[size="36"] {
    @include font-roboto(36px, 700, 42px, $gray-tuna);
  }
  &[size="24"] {
    @include font-roboto(24px, 700, 28px, $gray-tuna);
  }
}
</style>
