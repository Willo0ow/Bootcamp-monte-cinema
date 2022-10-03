<template>
  <div class="chip" data-spec="chip">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.chip {
  padding: 8px 16px;
  border-radius: 24px;
  background: $pink-wisp;
  @include font-roboto(14px, 700, 16px, $red-bittersweet);
  display: inline-block;
  height: fit-content;
}
</style>
