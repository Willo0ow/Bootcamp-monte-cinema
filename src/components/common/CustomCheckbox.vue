<template>
  <div class="custom-checkbox__wrapper">
    <input
      class="custom-checkbox__input"
      type="checkbox"
      value="agreed"
      :id="name"
      :name="name"
      v-model="value"
      @change="(event) => updateValue(event.target.checked)"
      :class="validationClasses"
      @blur="validate"
    />
    <label class="custom-checkbox__label" :for="name">
      <slot />
    </label>
    <div class="custom-checkbox__messages-wrapper">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="custom-checkbox__message"
        :class="`custom-checkbox__message--${message.type}`"
      >
        {{ message.visible ? message.text : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  emits: ["update:modelValue", "confirmValidation"],
  props: {
    modelValue: { type: Boolean, default: false },
    name: { type: String, required: true },
    required: { type: Boolean, default: false },
  },
  setup(props, context) {
    const value = ref(props.modelValue);
    const updateValue = (eventValue) => {
      value.value = eventValue;
      context.emit("update:modelValue", value.value);
      if (value.value && props.required) {
        context.emit("confirmValidation");
      }
    };

    const applyValidation = ref(false);
    function validate() {
      applyValidation.value = true;
    }
    const messages = computed(() => {
      if (props.required) {
        if (applyValidation.value) {
          const message = { text: "Required" };
          message.type = value.value ? "success" : "error";
          message.visible = false;
          return [message];
        }
      }
      return [];
    });
    const validationClasses = computed(() => ({
      "custom-checkbox__input--error":
        props.required && !value.value && applyValidation.value,
      "custom-checkbox__input--success":
        props.required && value.value && applyValidation.value,
    }));

    return {
      value,
      updateValue,
      validate,
      messages,
      validationClasses,
    };
  },
};
</script>

<style scoped lang="scss">
.custom-checkbox {
  &__wrapper {
    margin-top: 24px;
  }
  &__input {
    &--error {
      box-shadow: 0px 0px 1px 1px $cherry-red, inset 0px 0px 1px 1px $cherry-red;
    }
    &--success {
      box-shadow: 0px 0px 1px 1px $green-success,
        inset 0px 0px 1px 1px $green-success;
    }
  }
  &__label {
    @include font-roboto(18px, 400, 21px, $gray-charade);
    margin-left: 5px;
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
