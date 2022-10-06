<template>
  <div class="login">
    <div class="login__title">
      <SectionTitle variation="40-60-80">Hi there!</SectionTitle>
      <SectionTitle color="bombay" variation="40-60-80"
        >Care to log in?</SectionTitle
      >
    </div>
    <FormCard @submit="handleSubmit">
      <template #inputs>
        <CustomInput
          ref="emailInput"
          class="form-card__input"
          v-model="email"
          label="Email"
          placeholder="Something ending with monterail.com"
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
          width="100%"
          :to="{ name: 'Register' }"
          >Register instead</CustomButton
        >
        <CustomButton class="form-card__button" width="100%" type="submit"
          >Log in</CustomButton
        >
      </template>
    </FormCard>
    <div class="login__caption">
      Did you forget your password?
      <a class="login__caption-link" href="#">Reset it now</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import FormCard from "@components/Register/FormCard.vue";
import CustomInput from "@components/common/CustomInput.vue";
import CustomButton from "@components/common/CustomButton.vue";
import { useAuthStore } from "@/stores/auth";
import { useMeta } from "vue-meta";

export default {
  components: { SectionTitle, FormCard, CustomInput, CustomButton },
  setup() {
    const email = ref("");
    const password = ref("");
    const authStore = useAuthStore();
    async function handleSubmit() {
      await authStore.login(email.value, password.value);
    }
    const { meta } = useMeta({
      title: "Login",
    });
    return { email, password, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.login {
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
  &__caption {
    @include font-roboto(16px, 400, 170%, $gray-tuna);
    margin-top: 40px;
    text-align: center;
    @include mx-screen-sm-only(24px);
    @include breakpoint-sm {
      text-align: start;
    }
    &-link {
      @include font-roboto(16px, 400, 170%, $cherry-red);
    }
  }
}
</style>
