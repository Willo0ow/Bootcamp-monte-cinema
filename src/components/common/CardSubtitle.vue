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
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: $gray-jumbo;
}
</style>
