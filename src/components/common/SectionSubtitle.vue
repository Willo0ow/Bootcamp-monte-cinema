<template>
  <div class="subtitle">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
.subtitle {
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 170%;
  letter-spacing: 0.015em;
  color: $gray-tuna;
}
</style>
