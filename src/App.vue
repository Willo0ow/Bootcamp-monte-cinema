<template>
  <header>
    <NavBar />
  </header>

  <main>
    <HomePage />
  </main>
</template>
<script setup>
import HomePage from "./pages/HomePage.vue";
import { NavBar } from "./components/common";
</script>

<style lang="scss">
body {
  margin: 0;
}
main {
  margin: 0 48px 48px;
  max-width: 1440px;
}
@media (min-width: 1440px) {
  main {
    width: calc(1440px - 2 * 48px);
    margin: 0 auto;
  }
}
</style>
