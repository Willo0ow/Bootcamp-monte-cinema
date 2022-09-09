<template>
  <div class="card-subtitle" data-spec="card-subtitle">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card-subtitle {
  @include font-roboto(14px, 700, 16px, $gray-jumbo);
}
</style>
