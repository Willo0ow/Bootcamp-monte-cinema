<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 23.5039H28"
      :stroke="iconColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 16.0039H28"
      :stroke="iconColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 8.50391H28"
      :stroke="iconColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
import { ref, computed } from "vue";
export default {
  props: { color: { type: String, default: "#343541" } },
  setup(props) {
    const isHovered = ref(false);
    function toggleHover() {
      isHovered.value = !isHovered.value;
    }
    const iconColor = computed(() => {
      return isHovered.value ? "#fff" : props.color;
    });
    return {
      iconColor,
      toggleHover,
    };
  },
};
</script>
