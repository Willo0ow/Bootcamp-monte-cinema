<template>
  <CustomLabel>Movie</CustomLabel>
  <VSelect
    class="custom-select"
    :options="options"
    :model-value="modelValue"
    @update:modelValue="(event) => $emit('update:modelValue', event)"
  ></VSelect>
</template>
<script>
import VSelect from "vue-select";
import CustomLabel from "./CustomLabel.vue";
export default {
  components: { VSelect, CustomLabel },
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: { type: [Number, String], required: true },
  },
  emits: ["update:modelValue"],
  setup() {},
};
</script>
<style lang="scss">
.custom-select {
  font-family: "Roboto", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 18px !important;
}
.custom-select .vs__dropdown-toggle {
  background: $gray-athens !important;
  border-radius: 8px !important;
  border: none !important;
  padding: 16px 12px;
}
</style>
