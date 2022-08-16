<template>
  <component :is="element" class="capital-link">{{ text }}</component>
</template>
<script>
export default {
  props: {
    text: { type: String, required: true },
    href: { type: String, default: "" },
  },
  setup(props) {
    const element = props.href ? "a" : "sapn";
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
