<template>
  <div class="card__title">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "" },
  },
};
</script>
<style lang="scss">
.card__title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: $gray-tuna;
  margin-bottom: 8px;
}
</style>
