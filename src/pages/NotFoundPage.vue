<template>
  <div class="not-found">
    <SectionTitle variation="24-32-48"
      >The requested page was not found</SectionTitle
    >
  </div>
</template>
<script lang="ts">
import SectionTitle from "../components/common/SectionTitle.vue";
import { useMeta } from "vue-meta";
export default {
  components: { SectionTitle },
  setup(){
    const { meta } = useMeta({
      title: "Not Found",
    });
  }
};
</script>
<style scoped lang="scss">
.not-found {
  @include flex(row, center, center);
  height: calc(100vh - 200px);
}
</style>
