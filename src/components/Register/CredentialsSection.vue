<template>
  <div class="credentials-section__title">
    <SectionTitle variation="40-60-80">Ahoy you!</SectionTitle>
    <SectionTitle color="bombay" variation="40-60-80"
      >Care to register?</SectionTitle
    >
  </div>
  <FormCard @submit="(event) => handleSubmit(event)">
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
      <CustomButton
        class="form-card__button"
        width="100%"
        raw-text
        :to="{ name: 'Login' }"
        >Log in instead</CustomButton
      >
      <CustomButton class="form-card__button" width="100%" type="submit"
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
import { ref, reactive } from "vue";
import {
  minLength,
  hasLetters,
  hasDigits,
  isEmailValid,
} from "../../helpers/validationRules";

export default {
  emits: ["goToNextStep"],
  components: { FormCard, SectionTitle, CustomInput, CustomButton },
  setup(props, context) {
    const email = reactive({ inputValue: "", isValid: false });
    const password = reactive({ inputValue: "", isValid: false });

    const passwordRules = [hasLetters(), hasDigits(), minLength(8)];
    const emailRules = [isEmailValid(false)];
    const emailInput = ref(null);
    const passwordInput = ref(null);

    function validateForm() {
      emailInput.value.validate();
      passwordInput.value.validate();
      return email.isValid && password.isValid;
    }

    const registerStore = useRegisterStore();

    function handleSubmit() {
      if (validateForm()) {
        registerStore.setFormProperty("email", email.inputValue);
        registerStore.setFormProperty("password", password.inputValue);
        context.emit("goToNextStep");
      }
    }
    return {
      email,
      password,
      emailRules,
      passwordRules,
      handleSubmit,
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
</style>
