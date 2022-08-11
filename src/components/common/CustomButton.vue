<template>
  <button @click="$emit('click')" :size="size" :text="text" :color="color">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    label: { type: String, default: "" },
    color: { type: String, default: "red" },
    text: { type: Boolean },
    size: { type: String, default: "40" },
  },
  emits: ["click"],
};
</script>
<style lang="scss" scoped>
button {
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
}
button[color="red"] {
  background: $cherry-red;
}
button[text="true"] {
  background: transparent;
  color: $cherry-red;
}
button[size="56"] {
  padding: 19px 40px;
  font-size: 18px;
}
button[size="40"] {
  padding: 12px 32px;
  font-size: 16px;
}
</style>
