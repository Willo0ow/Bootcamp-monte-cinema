<template>
  <div class="chip">
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
  background: $wisp-pink;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: inline-block;
  color: $red-bittersweet;
}
</style>
