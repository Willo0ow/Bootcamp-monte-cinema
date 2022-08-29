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
  @include font-roboto-mono(22px, 700, 170%);
  letter-spacing: 0.015em;
  text-transform: uppercase;

  &[color="red"] {
    color: $cherry-red;
  }

  &[color="dark-grey"] {
    color: $gray-tuna;
  }
}
</style>
