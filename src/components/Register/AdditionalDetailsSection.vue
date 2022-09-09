<template>
  <div class="additional-details-section__title">
    <SectionTitle variation="40-60-80">Great!</SectionTitle>
    <SectionTitle color="bombay" variation="40-60-80"
      >Now your name</SectionTitle
    >
  </div>
  <FormCard @submit="(event) => handleSubmit(event)">
    <template #inputs>
      <CustomInput
        ref="firstNameInput"
        class="form-card__input"
        v-model="firstName.inputValue"
        label="First name"
        placeholder="e.g. Jessica"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (firstName.isValid = value)"
      />
      <CustomInput
        ref="lastNameInput"
        class="form-card__input"
        v-model="lastName.inputValue"
        label="Last name"
        placeholder="e.g. Walton"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (lastName.isValid = value)"
      />
      <CustomInput
        ref="dateOfBirthInput"
        class="form-card__input"
        v-model="dateOfBirth.inputValue"
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        type="date"
        :rules="dateOfBirthRules"
        @updateValidation="(value) => (dateOfBirth.isValid = value)"
      />
      <CustomCheckbox
        v-model="areTermsAccepted.inputValue"
        name="termsCheckbox"
        ref="termsCheckbox"
        :required="true"
        @updateValidation="(value) => (areTermsAccepted.isValid = value)"
      >
        I accept <a href="#">Privacy Policy</a></CustomCheckbox
      >
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
        >Register</CustomButton
      >
    </template>
  </FormCard>
</template>

<script>
import FormCard from "@components/Register/FormCard.vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import CustomInput from "@components/common/CustomInput.vue";
import CustomButton from "@components/common/CustomButton.vue";
import CustomCheckbox from "@components/common/CustomCheckbox.vue";
import { useRegisterStore } from "@/stores/register";
import { ref, reactive } from "vue";
import { minLength, isOldEnough } from "@/helpers/validationRules";

export default {
  components: {
    FormCard,
    SectionTitle,
    CustomInput,
    CustomButton,
    CustomCheckbox,
  },
  setup() {
    const firstName = reactive({ inputValue: "", isValid: false });
    const lastName = reactive({ inputValue: "", isValid: false });
    const dateOfBirth = reactive({ inputValue: null, isValid: false });
    const areTermsAccepted = reactive({ inputValue: false, isValid: false });

    const nameRules = [minLength(3, false)];
    const dateOfBirthRules = [isOldEnough(18)];
    const firstNameInput = ref(null);
    const lastNameInput = ref(null);
    const dateOfBirthInput = ref(null);
    const termsCheckbox = ref(null);

    function validateForm() {
      firstNameInput.value.validate();
      lastNameInput.value.validate();
      dateOfBirthInput.value.validate();
      termsCheckbox.value.validate();
      return (
        firstName.isValid &&
        lastName.isValid &&
        dateOfBirth.isValid &&
        areTermsAccepted.isValid
      );
    }

    const registerStore = useRegisterStore();

    async function handleSubmit() {
      if (validateForm()) {
        registerStore.setFormProperty("firstName", firstName.inputValue);
        registerStore.setFormProperty("lastName", lastName.inputValue);
        registerStore.setFormProperty("dateOfBirth", dateOfBirth.inputValue);
        await registerStore.registerUser();
      }
    }
    return {
      firstName,
      lastName,
      dateOfBirth,
      areTermsAccepted,
      nameRules,
      dateOfBirthRules,
      handleSubmit,
      firstNameInput,
      lastNameInput,
      dateOfBirthInput,
      termsCheckbox,
    };
  },
};
</script>

<style lang="scss" scoped>
.additional-details-section {
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
