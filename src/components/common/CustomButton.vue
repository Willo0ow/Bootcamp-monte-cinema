<template>
  <component
    :is="element"
    @click="$emit('click')"
    :color="color"
    :size="size"
    class="custom-button"
    :href="href"
    :class="class"
    ><slot
  /></component>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    color: { type: String, default: "red" },
    href: { type: String, default: "" },
    size: { type: String, default: "40" },
    class: { type: [String, Array, Object], default: "" },
  },
  emits: ["click"],
  setup(props) {
    const element = computed(() => (props.href ? "a" : "button"));
    return { element };
  },
};
</script>
<style lang="scss" scoped>
.custom-button {
  @include font-roboto-mono(false, 500, 100%);
  @include flex(row, center, center);
  color: white;
  border-radius: 64px;
  border: none;
  width: fit-content;
  text-decoration: none;
  box-sizing: border-box;

  &[size="56"] {
    padding: 19px 40px;
    font-size: 18px;
    height: 56px;
    &[rounded] {
      width: 56px;
    }
  }
  &[size="40"] {
    padding: 12px 32px;
    font-size: 16px;
    height: 40px;
    &[rounded] {
      width: 40px;
    }
  }
  &[size="24"] {
    padding: 5px 16px;
    font-size: 14px;
    height: 24px;
    &[rounded] {
      width: 24px;
    }
  }
  &[size="32"] {
    padding: 9px 24px;
    font-size: 14px;
    height: 32px;
    &[rounded] {
      width: 32px;
    }
  }
  @include max-sm {
    &[sm-size] {
      padding: 9px 24px;
      font-size: 14px;
      height: 32px;
      &[rounded] {
        width: 32px;
      }
    }
  }

  &[color="red"] {
    background: $cherry-red;
    border-color: $cherry-red;
    &[text] {
      color: $cherry-red;
      &.selected {
        background: $cherry-red;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
    }
    &[outlined] {
      color: $cherry-red;
      &:hover {
        background: #a60c0e;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
      &.selected {
        background: $cherry-red;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
    }
    &:active {
      border: 2px solid #f47073;
    }
  }
  &[color="gray"] {
    background: $gray-tuna;
    border-color: $gray-tuna;
    &[text] {
      color: $gray-tuna;
      &.selected {
        background: $gray-tuna;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
    }
    &[outlined] {
      color: $gray-tuna;
      &:hover {
        background: #212229;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
      &.selected {
        background: $gray-tuna;
        color: white;
        & :deep(.icon *) {
          stroke: white;
        }
      }
    }
    &:active {
      border: 2px solid #626262;
    }
  }
  &[text] {
    background: transparent;
    border-color: none;
  }
  &[outlined] {
    background: transparent;
    border-width: 2px;
    border-style: solid;
  }
  &[rounded] {
    align-content: center;
    justify-content: center;
    padding: 0;
  }
}
</style>
