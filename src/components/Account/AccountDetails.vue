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
import CustomInput from "@/components/common/CustomInput.vue";
import { reactive, ref } from "vue";
import {
  isEmailValid,
  minLength,
  isOldEnough,
  ValidationRule,
} from "@/helpers/validationRules";
import CustomButton from "@/components/common/CustomButton.vue";

interface UserDetail {
  inputValue: string;
  isValid: boolean;
}

const email: UserDetail = reactive({ inputValue: "", isValid: false });
const firstName: UserDetail = reactive({ inputValue: "", isValid: false });
const lastName: UserDetail = reactive({ inputValue: "", isValid: false });
const dateOfBirth: UserDetail = reactive({ inputValue: null, isValid: false });

const emailRules: Array<ValidationRule> = [isEmailValid(false)];
const nameRules: Array<ValidationRule> = [minLength(3, false)];
const dateOfBirthRules: Array<ValidationRule> = [isOldEnough(18)];
const emailInput = ref<InstanceType<typeof CustomInput> | null>(null);
const firstNameInput = ref<InstanceType<typeof CustomInput> | null>(null);
const lastNameInput = ref<InstanceType<typeof CustomInput> | null>(null);
const dateOfBirthInput = ref<InstanceType<typeof CustomInput> | null>(null);

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
