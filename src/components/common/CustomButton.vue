<template>
  <component
    :is="element"
    @click="$emit('click')"
    :color="color"
    :size="size"
    class="custom-button"
    :href="href"
    ><slot
  /></component>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    color: { type: String, default: "red" },
    href: { type: String, default: "" },
    size: { type: String, default: "40" },
  },
  emits: ["click"],
  setup(props) {
    const element = computed( () => props.href ? "a" : "button");
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
}
.custom-button[color="red"] {
  background: $cherry-red;
  border-color: $cherry-red;
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
.custom-button[size="56"] {
  padding: 19px 40px;
  font-size: 18px;
}
.custom-button[size="40"] {
  padding: 12px 32px;
  font-size: 16px;
}

.custom-button[outlined]:hover {
  background: #a60c0e;
  color: white;
}

.custom-button:active {
  border: 2px solid #f47073;
}
.custom-button:focus {
  background: #a60c0e;
  color: white;
}
</style>
