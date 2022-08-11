<template>
  <div id="welcome-section">{{ testData }}</div>
</template>
<script>
export default {
  components: {},
  setup() {
    const testData = "Welcome Section";
    return {
      testData,
    };
  },
};
</script>
<style scoped>
#welcome-section {
  height: 616px;
  width: 100%;
}
</style>
