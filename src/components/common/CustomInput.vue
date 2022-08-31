<template>
  <CustomLabel :for="label">{{ label }}</CustomLabel>
  <div class="input__container">
    <input
      v-bind="$attrs"
      :name="label"
      :id="label"
      class="input__base"
      :value="value"
      @input="updateValue($event)"
      :type="type"
    />
    <div class="input__icon--append">
      <slot name="appendIcon" />
    </div>
  </div>
</template>
<script>
import CustomLabel from "./CustomLabel.vue";
import { ref } from "vue";
export default {
  components: { CustomLabel },
  props: {
    modelValue: { type: [Number, String], default: null },
    label: { type: String, default: "" },
    type: { type: String, default: "text" },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const value = ref(props.modelValue);
    function updateValue(event) {
      value.value = event.target.value;
      context.emit("update:modelValue", value.value);
    }
    return {
      value,
      updateValue,
    };
  },
};
</script>
<style lang="scss" scoped>
.input__base {
  @include font-roboto(16px, 400, 100%, $gray-tuna);
  background: $gray-athens;
  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background: $gray-some;
  }
  &:active,
  &:focus {
    outline: 1px solid $blue-intense;
    background: $blue-bg;
  }
  &:invalid {
    outline: 1px solid $cherry-red;
  }
}

.input__container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
.input__icon--append {
  position: absolute;
  right: 24px;
  min-width: 18px;
  text-align: center;
}
</style>
