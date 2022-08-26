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
