<template>
  <div class="account-details">
    <form>
      <CustomInput
        ref="emailInput"
        class="account-details__input"
        v-model="email.inputValue"
        label="Email"
        placeholder="Something ending with monterail"
        type="email"
        :rules="emailRules"
        @updateValidation="(value) => (email.isValid = value)"
      />
      <CustomButton outlined size="40" class="account-details__password-btn"
        >Change Password</CustomButton
      >
      <CustomInput
        ref="firstNameInput"
        class="account-details__input"
        v-model="firstName.inputValue"
        label="First name"
        placeholder="e.g. Jessica"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (firstName.isValid = value)"
      />
      <CustomInput
        ref="lastNameInput"
        class="account-details__input"
        v-model="lastName.inputValue"
        label="Last name"
        placeholder="e.g. Walton"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (lastName.isValid = value)"
      />
      <CustomInput
        ref="dateOfBirthInput"
        class="account-details__input"
        v-model="dateOfBirth.inputValue"
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        type="date"
        :rules="dateOfBirthRules"
        @updateValidation="(value) => (dateOfBirth.isValid = value)"
      />
      <CustomButton
        outlined
        size="56"
        class="account-details__button"
        width="100%"
        >Save changes</CustomButton
      >
    </form>
  </div>
</template>

<script lang="ts" setup>
import CustomInput from "../common/CustomInput.vue";
import { reactive, ref, Ref } from "vue";
import { isEmailValid, minLength, isOldEnough } from "@helpers/validationRules";
import CustomButton from "../common/CustomButton.vue";

interface Credential {
  inputValue: string;
  isValid: boolean;
}

const email: Credential = reactive({ inputValue: "", isValid: false });
const firstName = reactive({ inputValue: "", isValid: false });
const lastName = reactive({ inputValue: "", isValid: false });
const dateOfBirth = reactive({ inputValue: null, isValid: false });

const emailRules = [isEmailValid(false)];
const nameRules = [minLength(3, false)];
const dateOfBirthRules = [isOldEnough(18)];
const emailInput: Ref<any> = ref(null);
const firstNameInput: Ref<any> = ref(null);
const lastNameInput: Ref<any> = ref(null);
const dateOfBirthInput: Ref<any> = ref(null);
</script>

<style lang="scss" scoped>
.account-details {
  max-width: 470px;
  &__password-btn {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &__input {
    margin-bottom: 24px;
  }
  &__button {
    margin-top: 40px;
  }
}
</style>
