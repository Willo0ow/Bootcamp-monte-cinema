<template>
  <nav>{{ testData }}</nav>
</template>
<script>
export default {
  components: {},
  setup() {
    const testData = "Navbar";
    return {
      testData,
    };
  },
};
</script>
<style scoped>
nav {
  height: 112px;
  width: 100%;
}
</style>
