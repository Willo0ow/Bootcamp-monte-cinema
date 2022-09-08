<template>
  <div class="credentials-section__title">
    <SectionTitle variation="40-60-80">Ahoy you!</SectionTitle>
    <SectionTitle color="bombay" variation="40-60-80"
      >Care to register?</SectionTitle
    >
  </div>
  <FormCard @onSubmit="(event) => onSubmit(event)">
    <template #inputs>
      <CustomInput
        ref="emailInput"
        class="form-card__input"
        v-model="email.inputValue"
        label="Email"
        placeholder="Something ending with monterail"
        type="email"
        :rules="emailRules"
        @updateValidation="(value) => (email.isValid = value)"
      />
      <CustomInput
        ref="passwordInput"
        class="form-card__input"
        v-model="password.inputValue"
        label="Password"
        placeholder="Enter your password"
        type="password"
        :rules="passwordRules"
        @updateValidation="(value) => (password.isValid = value)"
      />
    </template>
    <template #buttons>
      <CustomButton class="form-card__button" raw-text :to="{ name: 'Login' }"
        >Log in instead</CustomButton
      >
      <CustomButton class="form-card__button" type="submit"
        >Next step</CustomButton
      >
    </template>
  </FormCard>
</template>

<script>
import FormCard from "@components/Register/FormCard.vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import CustomInput from "@components/common/CustomInput.vue";
import CustomButton from "@components/common/CustomButton.vue";
import { useRegisterStore } from "@/stores/register";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export default {
  emits: ["goToNextStep"],
  components: { FormCard, SectionTitle, CustomInput, CustomButton },
  setup(props, context) {
    const registerStore = useRegisterStore();
    const { email, password } = storeToRefs(registerStore);

    const passwordRules = [
      { isValid: (val) => val.length >= 8, message: "At least 8 characters" },
      {
        isValid: (val) => /[a-zA-Z]/.test(val),
        message: "At least one letter",
      },
      { isValid: (val) => /\d/.test(val), message: "At least one digit" },
    ];
    const emailRules = [
      {
        isValid: (val) => /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]+/.test(val),
        message: "email error",
        visible: false,
      },
    ];
    const emailInput = ref(null);
    const passwordInput = ref(null);

    function validateForm() {
      emailInput.value.validate();
      passwordInput.value.validate();
      return email.value.isValid && password.value.isValid;
    }
    function onSubmit(event) {
      event.preventDefault();
      if (validateForm()) {
        context.emit("goToNextStep");
      }
    }
    return {
      email,
      password,
      emailRules,
      passwordRules,
      onSubmit,
      emailInput,
      passwordInput,
    };
  },
};
</script>

<style lang="scss" scoped>
.credentials-section {
  &__title {
    margin-bottom: 40px;
    @include breakpoint-xs {
      text-align: center;
      margin-right: 24px;
      margin-left: 24px;
    }
  }
}
.form-card {
  &__input,
  &__button {
    width: 100%;
    margin-bottom: 24px;
    @include breakpoint-sm {
      margin-bottom: 0;
    }
  }
}
</style>
