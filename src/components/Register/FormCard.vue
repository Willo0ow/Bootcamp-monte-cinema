<template>
  <div class="form-card">
    <slot />
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.form-card {
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background: #ffffff;
  box-sizing: border-box;
  @include breakpoint-sm {
    padding: 32px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
  }
  @include breakpoint-md {
    padding: 64px;
  }
}
</style>
