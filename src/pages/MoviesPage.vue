<template>
  <div><BreadCrumbs :steps="steps" back-route="/" /></div>
</template>
<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
export default {
  components: { BreadCrumbs },
  setup() {
    const steps = [{ text: "Movies", isLink: false }];
    return { steps };
  },
};
</script>
<style scoped lang="scss"></style>
