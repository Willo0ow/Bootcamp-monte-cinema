<template>
  <div class="additional-details-section__title">
    <SectionTitle variation="40-60-80">Great!</SectionTitle>
    <SectionTitle color="bombay" variation="40-60-80"
      >Now your name</SectionTitle
    >
  </div>
  <FormCard @onSubmit="(event) => onSubmit(event)">
    <template #inputs>
      <CustomInput
        ref="firstNameInput"
        class="form-card__input"
        v-model="firstName.inputValue"
        label="First name"
        placeholder="e.g. Jessica"
        type="text"
        :rules="nameRules"
        @confirmValidation="firstName.isValid = true"
      />
      <CustomInput
        ref="lastNameInput"
        class="form-card__input"
        v-model="lastName.inputValue"
        label="Last name"
        placeholder="e.g. Walton"
        type="text"
        :rules="nameRules"
        @confirmValidation="lastName.isValid = true"
      />
      <CustomInput
        ref="dateOfBirthInput"
        class="form-card__input"
        v-model="dateOfBirth.inputValue"
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        type="date"
        :rules="dateOfBirthRules"
        @confirmValidation="dateOfBirth.isValid = true"
      />
      <CustomCheckbox
        v-model="areTermsAccepted.inputValue"
        name="termsCheckbox"
        ref="termsCheckbox"
        :required="true"
        @confirmValidation="areTermsAccepted.isValid = true"
      >
        I accept <a href="#">Privacy Policy</a></CustomCheckbox
      >
    </template>
    <template #buttons>
      <CustomButton class="form-card__button" raw-text :to="{ name: 'Login' }"
        >Log in instead</CustomButton
      >
      <CustomButton class="form-card__button" type="submit"
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
import { storeToRefs } from "pinia";
import { ref } from "vue";

export default {
  components: {
    FormCard,
    SectionTitle,
    CustomInput,
    CustomButton,
    CustomCheckbox,
  },
  setup() {
    const registerStore = useRegisterStore();
    const { firstName, lastName, dateOfBirth, areTermsAccepted } =
      storeToRefs(registerStore);

    const nameRules = [
      {
        isValid: (val) => val.length > 3,
        message: "At least 3 characters",
        visible: false,
      },
    ];
    function checkUserAge(value) {
      const selectedDate = new Date(value);
      let dateToCompare = new Date();
      dateToCompare.setFullYear(dateToCompare.getFullYear() - 18);
      return selectedDate < dateToCompare;
    }
    const dateOfBirthRules = [
      {
        isValid: (val) => checkUserAge(val),
        message: "You should be minimum 18 years old",
      },
    ];
    const firstNameInput = ref(null);
    const lastNameInput = ref(null);
    const dateOfBirthInput = ref(null);
    const termsCheckbox = ref(null);

    function validateForm() {
      firstNameInput.value.validate();
      lastNameInput.value.validate();
      dateOfBirthInput.value.validate();
      termsCheckbox.value.validate();
      console.log(
        firstName.value.isValid &&
          lastName.value.isValid &&
          dateOfBirth.value.isValid &&
          areTermsAccepted.value.isValid,
        "validate"
      );
      return (
        firstName.value.isValid &&
        lastName.value.isValid &&
        dateOfBirth.value.isValid &&
        areTermsAccepted.value.isValid
      );
    }
    async function onSubmit(event) {
      event.preventDefault();
      console.log("submit");
      if (validateForm()) {
        console.log("register");
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
      onSubmit,
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
