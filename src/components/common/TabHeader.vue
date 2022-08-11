<template>
  <div>{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
div {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: $gray-jumbo;
  display: inline-block;
  width: 141px;
  text-align: center;
}
</style>
