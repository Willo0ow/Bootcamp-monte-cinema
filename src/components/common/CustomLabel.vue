<template>
  <label class="select-label">
    <slot></slot>
  </label>
</template>
<style scoped lang="scss">
.select-label {
  @include font-roboto-mono(14px, 700, 18px, #f47073);
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}
</style>
