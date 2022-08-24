<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import NavBar from "./components/common/NavBar.vue";
import { ref, provide } from "vue";
export default {
  components: { NavBar },
  setup() {
    const windowWidth = ref(window.innerWidth);
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
    provide("windowWidth", windowWidth);
    return {
      windowWidth,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
main {
  margin: 0 48px 48px;
  max-width: 1440px;
  box-sizing: border-box;
  @include xl {
    width: calc(1440px - 2 * 48px);
    margin: 0 auto;
  }
  @include max-sm {
    margin: 0;
  }
}
</style>
