<template>
  <nav class="nav">
    <Logo />
    <div class="nav__headers">
      <TabHeader
        :to="tab.path"
        v-for="tab in tabs"
        :key="tab.label"
        :active="isCurrentPath(tab.path.name)"
        >{{ tab.label }}</TabHeader
      >
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
import CustomButton from "@components/common/CustomButton.vue";
import TabHeader from "@components/common/TabHeader.vue";
import { useRouter } from "vue-router";
import CustomMenu from "@components/common/CustomMenu.vue";
export default {
  components: { Logo, TabHeader, CustomButton, CustomMenu },
  setup() {
    const tabs = [
      { label: "Movies", path: { name: "Movies" } },
      { label: "Screenings", path: { name: "Screenings" } },
      { label: "Contact Us", path: { name: "ContactUs" } },
    ];
    const router = useRouter();
    function isCurrentPath(pathName) {
      return router.currentRoute.value.name === pathName;
    }
    return {
      tabs,
      isCurrentPath,
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
      @include flex(false, false, center);
      height: 100%;
      & :deep(.tab-header) {
        @include flex(false, center, center);
        height: 100%;
        line-height: 100%;
        text-align: center;
        &[active="true"] {
          box-shadow: inset 0px -4px 0px #ec1115;
        }
      }
    }
  }
  &__menu {
    @include md-plus {
      display: none;
    }
  }
}
</style>
