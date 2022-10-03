<template>
  <div class="panel-selector" :class="{ 'panel-selector--active': active }">
    <div class="panel-selector__order" v-if="order">{{ order }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    order: { type: [String, Number], default: "" },
    active: { type: Boolean, default: false },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.panel-selector {
  @include font-roboto-mono(14px, 500, 20px, $red-bittersweet);
  padding: 4px 14px 4px 4px;
  box-sizing: border-box;
  border: solid 1px $red-bittersweet;
  border-radius: 64px;
  @include breakpoint-sm {
    @include font-roboto-mono(16px, 500, 24px, $red-bittersweet);
    padding: 8px 16px 8px 8px;
  }
  & + & {
    margin-left: 12px;
  }
  &--active {
    border: solid 1px $gray-tuna;
    color: $gray-tuna;
    & .panel-selector__order {
      background-color: $gray-tuna;
    }
  }
  &__order {
    background-color: $red-bittersweet;
    border-radius: 100%;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    text-align: center;
    color: white;
    display: inline-block;
    @include breakpoint-sm {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
