<template>
  <component :is="element" class="capital-link">
    <slot />
  </component>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    href: { type: String, default: "" },
  },
  setup(props) {
    const element = computed(() => (props.href ? "a" : "span"));
    return { element };
  },
};
</script>
<style lang="scss" scoped>
.capital-link {
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 170%;
  letter-spacing: 0.015em;
  text-transform: uppercase;
}
.capital-link[color="red"] {
  color: $cherry-red;
}
.capital-link[color="dark-grey"] {
  color: $gray-tuna;
}
</style>
