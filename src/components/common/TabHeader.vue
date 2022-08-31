<template>
  <component :is="element" class="tab-header" :to="to">
    <slot />
  </component>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    to: { type: [String, Object], default: "" },
  },
  setup(props) {
    const element = computed(() => (props.to ? "router-link" : "a"));
    return { element };
  },
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
