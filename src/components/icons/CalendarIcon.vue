<template>
  <svg
    class="icon"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @mouseenter="toggleHover"
    @mouseleave="toggleHover"
  >
    <path
      d="M25.75 7.75H6.25C5.42157 7.75 4.75 8.42157 4.75 9.25V25.75C4.75 26.5784 5.42157 27.25 6.25 27.25H25.75C26.5784 27.25 27.25 26.5784 27.25 25.75V9.25C27.25 8.42157 26.5784 7.75 25.75 7.75Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.75 10V4.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.25 10V4.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.75 18.25H9.25V22.75H13.75V18.25Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 13.75V22.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.75 13.75H13.75V22.75H22.75V13.75Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.75 18.25H22.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: { color: { type: String, default: "#343541" } },
};
</script>
<style scoped lang="scss">
.icon {
  height: 20px;
  width: 20px;
  @include breakpoint-md {
    height: 32px;
    width: 32px;
  }
}
</style>
