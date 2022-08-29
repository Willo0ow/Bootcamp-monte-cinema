<template>
  <nav class="nav">
    <Logo />
    <div class="nav__headers">
      <TabHeader v-for="tab in tabs" :key="tab.label">{{
        tab.label
      }}</TabHeader>
    </div>
    <div class="nav__buttons">
      <CustomButton text>Register</CustomButton>
      <CustomButton>Login</CustomButton>
    </div>
    <div class="nav__menu">
      <CustomMenu :tabs="tabs" />
    </div>
  </nav>
</template>
<script>
import Logo from "@assets/images/logo.svg?component";
import CustomButton from "./CustomButton.vue";
import TabHeader from "./TabHeader.vue";
import CustomMenu from "./CustomMenu.vue";
export default {
  components: { Logo, TabHeader, CustomButton, CustomMenu },
  setup() {
    const tabs = [
      { label: "Movies", path: "/" },
      { label: "Screenings", path: "/" },
      { label: "Contact Us", path: "/" },
    ];
    return {
      tabs,
    };
  },
};
</script>
<style lang="scss" scoped>
.nav {
  height: 112px;
  width: 100%;
  box-sizing: border-box;
  @include flex(row, space-between, center);
  padding: 0 48px;
  max-width: 1440px;
  @include xl {
    margin: 0 auto;
  }
  &__buttons {
    display: none;
    @include md-plus {
      @include flex();
    }
  }
  &__headers {
    display: none;
    @include md-plus {
      display: block;
    }
  }
  &__menu {
    @include md-plus {
      display: none;
    }
  }
}
</style>
