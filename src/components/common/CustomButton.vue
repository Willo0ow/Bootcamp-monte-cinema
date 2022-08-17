<template>
  <component
    :is="element"
    @click="$emit('click')"
    :color="color"
    :size="size"
    class="custom-button"
    :href="href"
    :class="class"
    ><slot
  /></component>
</template>
<script>
export default {
  props: {
    color: { type: String, default: "red" },
    href: { type: String, default: "" },
    size: { type: String, default: "40" },
    class: { type: [String, Array, Object], default: "" },
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
  text-decoration: none;
  box-sizing: border-box;
}
.custom-button[color="red"] {
  background: $cherry-red;
  border-color: $cherry-red;
}
.custom-button[color="gray"] {
  background: $gray-tuna;
  border-color: $gray-tuna;
}
.custom-button[text] {
  background: transparent;
  border-color: none;
  color: $cherry-red;
}
.custom-button[outlined] {
  background: transparent;
  color: $cherry-red;
  border: $cherry-red 2px solid;
}
.custom-button[outlined][color="gray"] {
  background: transparent;
  color: $gray-tuna;
  border: $gray-tuna 2px solid;
}
.custom-button[size="56"] {
  padding: 19px 40px;
  font-size: 18px;
  height: 56px;
}
.custom-button[size="40"] {
  padding: 12px 32px;
  font-size: 16px;
  height: 40px;
}

.custom-button[outlined]:hover {
  background: #a60c0e;
  color: white;
}
.custom-button[outlined][color="gray"]:hover {
  background: $gray-tuna;
  color: white;
}

.custom-button:active {
  border: 2px solid #f47073;
}
.custom-button:focus {
  background: #a60c0e;
  color: white;
}
.selected[color="gray"][outlined] {
  background: $gray-tuna;
  color: white;
}
.custom-button[rounded] {
  align-content: center;
  justify-content: center;
  padding: 0;
  width: 56px;
}
</style>
