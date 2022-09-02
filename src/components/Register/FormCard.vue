<template>
  <div class="form-card">
    <form class="form-card__form">
      <CustomInput
        v-for="field of fields"
        :key="field.id"
        class="form-card__input"
        v-model="field.value"
        :label="field.label"
        :placeholder="field.placeholder"
      />
      <slot name="additionalInputs" />
      <div class="form-card__buttons">
        <CustomButton
          v-for="btn of formButtons"
          :key="btn.id"
          class="form-card__button"
          v-bind="btn.attrs"
          >{{ btn.label }}</CustomButton
        >
      </div>
    </form>
  </div>
</template>
<script>
import CustomInput from "@components/common/CustomInput.vue";
import CustomButton from "@components/common/CustomButton.vue";
export default {
  components: { CustomInput, CustomButton },
  props: {
    fields: { type: Array, required: true },
    formButtons: { type: Array, required: true },
  },
  script(props) {},
};
</script>
<style lang="scss" scoped>
.form-card {
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  @include breakpoint-sm {
    padding: 32px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
  }
  @include breakpoint-md {
    padding: 64px;
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
