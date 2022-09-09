<template>
  <div class="form-card">
    <form
      class="form-card__form"
      @submit.prevent="$emit('submit', $event)"
      novalidate
    >
      <slot name="inputs" />
      <div class="form-card__buttons">
        <slot name="buttons" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  emits: ["submit"],
};
</script>
<style lang="scss">
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
  &__buttons {
    @include flex(column);
    flex-flow: column-reverse;
    width: 100%;
    @include breakpoint-sm {
      @include flex(row);
    }
    margin-top: 40px;
    & .custom-button {
      margin-bottom: 24px;
      @include breakpoint-sm {
        margin-bottom: 0;
      }
    }
  }
}
</style>
