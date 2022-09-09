<template>
  <header>
    <component :is="navVariant"></component>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import NavBar from "@components/common/NavBar.vue";
import NavBarRegister from "@components/common/NavBarRegister.vue";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { NavBar, NavBarRegister },
  setup() {
    const route = useRoute();
    const navVariant = computed(() => route.meta.navVariant || "NavBar");

    const authStore = useAuthStore();
    onBeforeMount(() => {
      authStore.restoreUserToken();
    });
    return { navVariant };
  },
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
