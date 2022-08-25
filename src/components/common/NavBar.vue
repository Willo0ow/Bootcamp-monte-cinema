<template>
  <nav>
    <Logo />
    <div class="nav-headers">
      <TabHeader :to="tab.path" v-for="tab in tabs" :key="tab.label">{{
        tab.label
      }}</TabHeader>
    </div>
    <div class="nav-buttons">
      <CustomButton text>Register</CustomButton>
      <CustomButton>Login</CustomButton>
    </div>
    <NavigrationIcon class="nav-icon" v-s-dropdown-toggle:nav-options />
    <SDropdown name="nav-options">
      <ul>
        <li class="option" v-for="tab in tabs" :key="tab.label">
          <a :href="tab.path">{{ tab.label }}</a>
        </li>
        <hr class="divider" />
        <li class="option"><a href="/login">Login</a></li>
        <li class="option"><a href="/register">Register</a></li>
      </ul>
    </SDropdown>
  </nav>
</template>
<script>
import Logo from "@assets/images/logo.svg?component";
import CustomButton from "./CustomButton.vue";
import TabHeader from "./TabHeader.vue";
import NavigrationIcon from "../icons/NavigrationIcon.vue";
export default {
  components: { Logo, TabHeader, CustomButton, NavigrationIcon },

  setup() {
    const tabs = [
      { label: "Movies", path: { name: "Movies" } },
      { label: "Screenings", path: { name: "Movies" } },
      { label: "Contact Us", path: { name: "Movies" } },
    ];
    return {
      tabs,
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  height: 112px;
  width: 100%;
  box-sizing: border-box;
  @include flex(row, space-between, center);
  padding: 0 48px;
  @include xl {
    width: 1440px;
    margin: 0 auto;
  }
}
.nav-buttons {
  @include flex();
  @media (max-width: 960px) {
    display: none;
  }
}
.nav-headers {
  @include flex(false, false, center);
  height: 100%;
  @media (max-width: 960px) {
    display: none;
  }
  & :deep(.tab-header) {
    @include flex(false, center, center);
  }
}
.nav-icon {
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
}
.option {
  padding: 15px 32px;
  &:hover {
    background-color: $pink-fair;
  }
}
.divider {
  margin: 0 20px;
  color: $gray-bombay;
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
