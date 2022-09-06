<template>
  <div class="custom-input">
    <CustomLabel :for="label">{{ label }}</CustomLabel>
    <div class="custom-input__container">
      <input
        v-bind="$attrs"
        :name="label"
        :id="label"
        class="custom-input__base"
        :class="validationClasses"
        :value="value"
        @input="updateValue($event)"
        :type="type"
        @blur="validate"
      />
      <div class="custom-input__icon--append">
        <slot name="appendIcon" />
      </div>
    </div>
    <div class="custom-input__messages-wrapper">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="custom-input__message"
        :class="`custom-input__message--${message.type}`"
      >
        {{ message.visible ? message.text : "" }}
      </div>
    </div>
  </div>
</template>
<script>
import CustomLabel from "@components/common/CustomLabel.vue";
import { ref, computed, watch } from "vue";
export default {
  components: { CustomLabel },
  props: {
    modelValue: { type: [Number, String], default: null },
    label: { type: String, default: "" },
    type: { type: String, default: "text" },
    rules: { type: Array, default: () => [] },
  },
  emits: ["update:modelValue", "confirmValidation"],
  setup(props, context) {
    const value = ref(props.modelValue);

    function updateValue(event) {
      value.value = event.target.value;
      context.emit("update:modelValue", value.value);
    }

    const applyValidation = ref(false);
    function validate() {
      applyValidation.value = true;
    }

    const messages = computed(() => {
      if (props.rules.length) {
        if (applyValidation.value) {
          return props.rules.map((rule) => {
            const validationResult = rule.isValid(value.value);
            const message = { text: rule.message };
            message.type = validationResult ? "success" : "error";
            message.visible = rule.visible === false ? false : true;
            return message;
          });
        }
        return props.rules.map((rule) => ({
          type: "normal",
          text: rule.message,
          visible: rule.visible === false ? false : true,
        }));
      }
      return [];
    });

    const isInputValid = computed(() => {
      if (
        !messages.value.length ||
        messages.value.every((message) => message.type === "success")
      )
        return true;
      return false;
    });

    watch(isInputValid, (newValue) => {
      if (newValue === true) {
        context.emit("confirmValidation");
      }
    });

    const validationClasses = computed(() => ({
      "custom-input__base--error": !isInputValid.value && applyValidation.value,
      "custom-input__base--success":
        isInputValid.value && applyValidation.value,
    }));

    return {
      value,
      updateValue,
      messages,
      validate,
      isInputValid,
      applyValidation,
      validationClasses,
    };
  },
};
</script>
<style lang="scss" scoped>
.custom-input {
  &__base {
    @include font-roboto(16px, 400, 100%, $gray-tuna);
    background: $gray-athens;
    border-radius: 8px;
    border: none;
    padding: 16px 24px;
    width: 100%;
    box-sizing: border-box;
    &--error,
    &--error:focus {
      outline: $cherry-red 1px solid;
    }
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
    &--success {
      outline: $green-success 1px solid;
    }
  }
  &__container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__icon--append {
    position: absolute;
    right: 24px;
    min-width: 18px;
    text-align: center;
  }
  &__messages-wrapper {
    margin-top: 8px;
  }
  &__message {
    @include font-roboto(14px, 400, 24px);
    letter-spacing: 0.04em;
    &--normal {
      color: $gray-tuna;
    }
    &--error {
      color: $cherry-red;
    }
    &--success {
      color: $green-success;
    }
  }
}
</style>
