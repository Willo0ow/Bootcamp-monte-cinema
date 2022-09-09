<template>
  <nav class="register-nav">
    <Logo />
    <div class="register-nav__motto">
      Developed with <span class="register-nav__motto-icon">♥</span> by
      Monterail
    </div>
    <div class="register-nav__menu">
      <CustomMenu :tabs="tabs" />
    </div>
  </nav>
</template>
<script>
import Logo from "@assets/images/logo.svg?component";
import CustomMenu from "@components/common/CustomMenu.vue";
export default {
  components: { Logo, CustomMenu },
  setup() {
    const tabs = [{ label: "Home", path: { name: "Home" } }];
    return {
      tabs,
    };
  },
};
</script>
<style lang="scss" scoped>
.register-nav {
  height: 112px;
  width: 100%;
  box-sizing: border-box;
  @include flex(row, space-between, center);
  padding: 0 24px;
  max-width: 1440px;
  @include breakpoint-xl {
    margin: 0 auto;
  }
  @include breakpoint-sm {
    padding: 0 48px;
  }
  &__motto {
    display: none;
    @include breakpoint-md {
      @include font-roboto-mono(16px, 500, 21px, $gray-tuna);
      display: inline-block;
      text-transform: uppercase;
    }
    &-icon {
      font-size: 18px;
      color: $cherry-red;
    }
  }
  &__menu {
    @include breakpoint-md {
      display: none;
    }
  }
}
</style>
