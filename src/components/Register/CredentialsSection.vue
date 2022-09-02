<template>
  <div class="credentials-section__title">
    <SectionTitle variation="40-60-80">Ahoy you!</SectionTitle>
    <SectionTitle color="bombay" variation="40-60-80"
      >Care to register?</SectionTitle
    >
  </div>
  <FormCard :fields="fields" :formButtons="formButtons" />
</template>

<script>
import FormCard from "@components/Register/FormCard.vue";
import SectionTitle from "@components/common/SectionTitle.vue";

export default {
  emits: ["setRegisterDataProperty"],
  components: { FormCard, SectionTitle },
  setup() {
    const fields = [
      {
        id: 1,
        label: "Email",
        placeholder: "Something ending with monterail",
        value: "email",
      },
      {
        id: 2,
        label: "Password",
        placeholder: "Enter your password",
        value: "password",
      },
    ];
    const formButtons = [
      { id: 1, label: "Log in instead", attrs: { "raw-text": true } },
      { id: 2, label: "Next step", attrs: {} },
    ];
    return { fields, formButtons };
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
