<template>
  <div class="account-details">
    <form v-if="currentUser && user" @submit.prevent="saveChanges">
      <CustomInput
        ref="emailInput"
        class="account-details__input"
        v-model="user.email.inputValue"
        label="Email"
        placeholder="Something ending with monterail.com"
        type="email"
        :rules="emailRules"
        @updateValidation="(value) => (user.email.isValid = value)"
      />
      <CustomButton
        outlined
        size="40"
        href="#"
        class="account-details__password-btn"
        >Change Password</CustomButton
      >
      <CustomInput
        ref="firstNameInput"
        class="account-details__input"
        v-model="user.first_name.inputValue"
        label="First name"
        placeholder="e.g. Jessica"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (user.first_name.isValid = value)"
      />
      <CustomInput
        ref="lastNameInput"
        class="account-details__input"
        v-model="user.last_name.inputValue"
        label="Last name"
        placeholder="e.g. Walton"
        type="text"
        :rules="nameRules"
        @updateValidation="(value) => (user.last_name.isValid = value)"
      />
      <CustomInput
        ref="dateOfBirthInput"
        class="account-details__input"
        v-model="user.date_of_birth.inputValue"
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        type="date"
        :rules="dateOfBirthRules"
        @updateValidation="(value) => (user.date_of_birth.isValid = value)"
      />
      <CustomInput
        ref="passwordInput"
        class="account-details__input"
        v-model="password"
        label="Enter your password to enable save"
        placeholder="Enter your password"
        type="password"
      />
      <CustomButton
        outlined
        size="56"
        class="account-details__button"
        width="100%"
        :disabled="!enableSave"
        type="submit"
        >Save changes</CustomButton
      >
    </form>
  </div>
</template>

<script lang="ts" setup>
import CustomInput from "@/components/common/CustomInput.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import { computed, onBeforeMount, Ref, ref } from "vue";
import {
  isEmailValid,
  minLength,
  isOldEnough,
  ValidationRule,
} from "@/helpers/validationRules";
import { updateCurrentUser, UserUpdate } from "@/api/useAuthApi";
import { notify } from "@kyvg/vue3-notification";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
const { user: currentUser } = storeToRefs(authStore);

interface UserDetail {
  inputValue: string | Date;
  isValid: boolean;
}
interface UserUpdateData {
  email: UserDetail;
  first_name: UserDetail;
  last_name: UserDetail;
  date_of_birth: UserDetail;
}
const user: Ref<UserUpdateData | null> = ref(null);

const fields: Array<string> = [
  "email",
  "first_name",
  "last_name",
  "date_of_birth",
];
async function getCurrentUserDetails() {
  user.value = fields.reduce(
    (userInputs: UserUpdateData, property) => {
      userInputs[property] = {
        inputValue: currentUser.value[property],
        isValid: true,
      };
      return userInputs;
    },
    {
      email: { inputValue: "", isValid: false },
      first_name: { inputValue: "", isValid: false },
      last_name: { inputValue: "", isValid: false },
      date_of_birth: { inputValue: "", isValid: false },
    }
  );
}

onBeforeMount(async () => {
  await getCurrentUserDetails();
});

const password: Ref<string> = ref("");

const emailRules: Array<ValidationRule> = [isEmailValid(false)];
const nameRules: Array<ValidationRule> = [minLength(3, false)];
const dateOfBirthRules: Array<ValidationRule> = [isOldEnough(18)];

type CustomInputRef = InstanceType<typeof CustomInput> | null;
const emailInput = ref<CustomInputRef>(null);
const firstNameInput = ref<CustomInputRef>(null);
const lastNameInput = ref<CustomInputRef>(null);
const dateOfBirthInput = ref<CustomInputRef>(null);

const enableSave = computed<boolean>(() => password.value.length >= 8);

async function saveChanges() {
  const updateForm: UserUpdate = {
    email: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    current_password: password.value,
  };
  fields.forEach(
    (property) => (updateForm[property] = user.value[property].inputValue)
  );
  const status: number = await updateCurrentUser(updateForm);
  if (status >= 200 && status < 300) {
    notify({
      title: "Success",
      text: "Your account details have been updated",
      type: "success",
      group: "auth",
      duration: 5000,
    });
    password.value = "";
    await authStore.getCurrentUser();
    await getCurrentUserDetails();
  } else {
    notify({
      title: "Error",
      text: "Something went wrong. We were not able to save your changes.",
      type: "error",
      group: "auth",
      duration: 5000,
    });
  }
}
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
