<template>
  <div class="register">
    <div class="register__title">
      <SectionTitle variation="40-60-80">Ahoy you!</SectionTitle>
      <SectionTitle color="bombay" variation="40-60-80"
        >Care to register?</SectionTitle
      >
    </div>
    <FormCard class="register__card">
      <form class="register__form">
        <CustomInput
          class="register__input"
          v-model="email"
          label="Email"
          placeholder="Something ending with"
        />
        <CustomInput
          class="register__input"
          v-model="password"
          label="Password"
          placeholder="Enter your password"
        />
        <div class="register__buttons">
          <CustomButton raw-text class="register__button"
            >Log in instead</CustomButton
          >
          <CustomButton class="register__button">Next step</CustomButton>
        </div>
      </form>
    </FormCard>
  </div>
</template>

<script>
import FormCard from "../components/Register/FormCard.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import CustomInput from "../components/common/CustomInput.vue";
import { ref } from "vue";
import CustomButton from "../components/common/CustomButton.vue";

export default {
  components: { FormCard, SectionTitle, CustomInput, CustomButton },
  setup() {
    const email = ref("");
    const password = ref("");
    return { email, password };
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
  margin: 0 auto;
  box-sizing: border-box;
  &__title {
    margin-bottom: 40px;
    @include breakpoint-xs {
      text-align: center;
      margin-right: 24px;
      margin-left: 24px;
    }
  }
  &__card {
    width: 100%;
  }
  &__form {
    width: 100%;
  }
  &__input {
    width: 100%;
    margin-bottom: 24px;
  }
  &__buttons {
    @include flex(column);
    flex-flow: column-reverse;
    width: 100%;
    @include breakpoint-sm {
      @include flex(row);
    }
    margin-top: 40px;
  }
  &__button {
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>
