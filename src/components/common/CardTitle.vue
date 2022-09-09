<template>
  <div class="card-title" size="36" data-spec="card-title">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card-title {
  margin-bottom: 8px;
  padding-right: 20px;
  &[size="36"] {
    @include font-roboto(36px, 700, 42px, $gray-tuna);
  }
  &[size="24"] {
    @include font-roboto(24px, 700, 28px, $gray-tuna);
  }
  &[nowrap] {
    white-space: nowrap;
  }
}
</style>
