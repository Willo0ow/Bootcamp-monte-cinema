<template>
  <div class="register">
    <div class="register__title">
      <SectionTitle variation="40-60-80">Hi there!</SectionTitle>
      <SectionTitle color="bombay" variation="40-60-80"
        >Care to log in?</SectionTitle
      >
    </div>
    <FormCard @onSubmit="(event) => handleSubmit(event)">
      <template #inputs>
        <CustomInput
          ref="emailInput"
          class="form-card__input"
          v-model="email"
          label="Email"
          placeholder="Something ending with monterail"
          type="email"
        />
        <CustomInput
          ref="passwordInput"
          class="form-card__input"
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </template>
      <template #buttons>
        <CustomButton
          class="form-card__button"
          raw-text
          :to="{ name: 'Register' }"
          >Register instead</CustomButton
        >
        <CustomButton class="form-card__button" type="submit"
          >Log in</CustomButton
        >
      </template>
    </FormCard>
  </div>
</template>

<script>
import { ref } from "vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import FormCard from "../components/Register/FormCard.vue";
import CustomInput from "../components/common/CustomInput.vue";
import CustomButton from "../components/common/CustomButton.vue";

export default {
  components: { SectionTitle, FormCard, CustomInput, CustomButton },
  setup() {
    const email = ref("");
    const password = ref("");
    async function handleSubmit(event) {
      event.preventDefault();
    }
    return { email, password, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 470px;
  padding-top: 64px;
  @include breakpoint-md {
    max-width: 605px;
    padding-top: 120px;
  }
  margin: 0 auto 64px;
  box-sizing: border-box;
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
  &__input {
    width: 100%;
    margin-bottom: 24px;
  }
  &__button {
    width: 100%;
    margin-bottom: 24px;
    @include breakpoint-sm {
      margin-bottom: 0;
    }
  }
}
</style>
