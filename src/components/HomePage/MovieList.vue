<template>
  <div>{{ testData }}</div>
</template>
<script>
export default {
  components: {},
  setup() {
    const testData = "Movie List";
    return {
      testData,
    };
  },
};
</script>
