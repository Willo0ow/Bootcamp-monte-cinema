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

<style scoped></style>
