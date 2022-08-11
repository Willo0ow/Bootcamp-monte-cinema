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
</style>
