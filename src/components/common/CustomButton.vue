<template>
  <component
    :is="element"
    @click="$emit('click')"
    :color="color"
    :size="size"
    class="custom-button"
    >{{ label }}</component
  >
</template>
<script>
export default {
  props: {
    label: { type: String, default: "" },
    color: { type: String, default: "red" },
    href: { type: String, default: "" },
    size: { type: String, default: "40" },
  },
  emits: ["click"],
  setup(props) {
    const element = props.href ? "a" : "button";
    return { element };
  },
};
</script>
<style lang="scss" scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  border-radius: 64px;
  border: none;
  width: fit-content;
}
.custom-button[color="red"] {
  background: $cherry-red;
}
.custom-button[text] {
  background: transparent;
  color: $cherry-red;
}
.custom-button[size="56"] {
  padding: 19px 40px;
  font-size: 18px;
}
.custom-button[size="40"] {
  padding: 12px 32px;
  font-size: 16px;
}
</style>
