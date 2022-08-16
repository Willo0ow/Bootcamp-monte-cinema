<template>
  <div class="title">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Eczar", serif;
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: $gray-tuna;
}
.title[color="bombay"] {
  color: $gray-bombay;
}
.title[size="64"] {
  font-size: 64px;
}
</style>
