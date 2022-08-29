<template>
  <router-link class="tab-header" :to="to">
    <slot />
  </router-link>
</template>
<script>
export default {
  props: { to: { type: [String, Object], default: "/" } },
};
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
