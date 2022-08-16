<template>
  <div class="card__subtitle">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "" },
  },
};
</script>
<style lang="scss">
.card__subtitle {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: $gray-jumbo;
}
</style>
