<template>
  <div class="menu">
    <NavigationIcon class="menu__icon" v-s-dropdown-toggle:menu__options />
    <SDropdown name="menu__options">
      <ul>
        <li class="menu__option" v-for="tab in tabs" :key="tab.label">
          <router-link :to="tab.path">{{ tab.label }}</router-link>
        </li>
        <hr class="menu__divider" />
        <li class="menu__option">
          <router-link to="/">Login</router-link>
        </li>
        <li class="menu__option">
          <router-link :to="{ name: 'Register' }">Register</router-link>
        </li>
      </ul>
    </SDropdown>
  </div>
</template>
<script>
import NavigationIcon from "@components/icons/NavigationIcon.vue";
export default {
  components: { NavigationIcon },
  props: {
    tabs: { type: Array, default: () => [] },
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
