<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import NavBar from "@components/common/NavBar.vue";
export default {
  components: { NavBar },
  setup() {},
};
</script>

<style lang="scss">
body {
  margin: 0;
}
main {
  max-width: 1440px;
  box-sizing: border-box;
  margin: 0;
  @include breakpoint-md {
    margin: 0 48px 48px;
  }
  @include breakpoint-xl {
    width: calc(1440px - 2 * 48px);
    margin: 0 auto;
  }
}
</style>
