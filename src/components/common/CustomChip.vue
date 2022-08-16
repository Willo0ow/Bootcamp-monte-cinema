<template>
  <div class="chip">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "" },
  },
};
</script>
<style lang="scss">
.chip {
  padding: 8px 16px;
  border-radius: 24px;
  background: $wisp-pink;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: inline-block;
  color: $red-bittersweet;
}
</style>
