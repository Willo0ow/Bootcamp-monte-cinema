<template>
  <div class="menu">
    <NavigationIcon class="menu__icon" v-s-dropdown-toggle:menu__options />
    <SDropdown name="menu__options">
      <ul>
        <li class="menu__option" v-for="tab in tabs" :key="tab.label">
          <router-link :to="tab.path">{{ tab.label }}</router-link>
        </li>
        <hr class="menu__divider" />
        <template v-if="!isUserLoggedIn">
          <li class="menu__option">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li class="menu__option">
            <router-link :to="{ name: 'Register' }">Register</router-link>
          </li>
        </template>
        <template v-else>
          <li class="menu__option">
            <router-link :to="{ name: 'Account' }">My account</router-link>
          </li>
          <li class="menu__option">
            <div @click="authStore.logout">Logout</div>
          </li>
        </template>
      </ul>
    </SDropdown>
  </div>
</template>
<script>
import NavigationIcon from "@components/icons/NavigationIcon.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
export default {
  components: { NavigationIcon },
  props: {
    tabs: { type: Array, default: () => [] },
  },
  setup() {
    const authStore = useAuthStore();
    const { isUserLoggedIn } = storeToRefs(authStore);
    return { isUserLoggedIn, authStore };
  },
};
</script>
<style lang="scss">
.menu {
  &__option {
    padding: 15px 32px;
    &:hover {
      background-color: $pink-fair;
    }
  }
  &__divider {
    margin: 0 20px;
    color: $gray-bombay;
  }
}
</style>
<style lang="scss">
.s-dropdown {
  background-color: white;
  @include font-roboto(18px, 400, 16px, $gray-mid);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
