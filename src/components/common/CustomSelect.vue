<template>
  <CustomLabel>{{ label }}</CustomLabel>
  <VSelect
    class="custom-select"
    :options="options"
    :reduce="(filter) => filter[optionValue]"
    :model-value="modelValue"
    @update:modelValue="(event) => updateValue(event)"
    :label="optionLabel"
  ></VSelect>
</template>
<script>
import VSelect from "vue-select";
import CustomLabel from "./CustomLabel.vue";
import { ref } from "vue";
export default {
  components: { VSelect, CustomLabel },
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: { type: [Number, String], default: null },
    label: { type: String, default: "" },
    optionValue: { type: String, default: "value" },
    optionLabel: { type: String, default: "label" },
    clearValue: { type: [String, Number], default: null },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const value = ref(props.modelValue);
    function updateValue(event) {
      value.value = event === null ? props.clearValue : event;
      context.emit("update:modelValue", value.value);
    }
    return {
      value,
      updateValue,
    };
  },
};
</script>
<style lang="scss">
.custom-select {
  font-family: "Roboto", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  text-overflow: ellipsis;
  white-space: nowrap;
// <<<<<<< HEAD
// }
// .custom-select .vs__dropdown-toggle {
//   background: $gray-athens !important;
//   border-radius: 8px !important;
//   border: none !important;
//   padding: 11.2px 12px;
// }
// .custom-select .vs__selected-options {
//   flex-wrap: nowrap;
//   max-width: calc(100% - 40px);
// =======
  & .vs__dropdown-toggle {
    background: $gray-athens !important;
    border-radius: 8px !important;
    border: none !important;
    padding: 18px 12px;
  }
  & .vs__selected-options {
    flex-wrap: nowrap;
    max-width: calc(100% - 40px);
  }
  & .vs__selected {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
  }
}

:root {
  --vs-font-size: 16px;
  --vs-line-height: 1;
}
</style>
