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
    <div>
      <CustomSelect v-model="$i18n.locale" :options="languages" />
    </div>
    <div class="nav__buttons" v-if="!isUserLoggedIn">
      <CustomButton raw-text :to="{ name: 'Register' }">Register</CustomButton>
      <CustomButton :to="{ name: 'Login' }">Login</CustomButton>
    </div>
    <div class="nav__buttons" v-else>
      <CustomButton raw-text :to="{ name: 'Account' }" class="nav__button"
        >My account</CustomButton
      >
      <CustomButton @click="authStore.logout">Logout</CustomButton>
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
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import CustomSelect from "@components/common/CustomSelect.vue";
export default {
  components: { Logo, TabHeader, CustomButton, CustomMenu, CustomSelect },
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
    const authStore = useAuthStore();
    const { isUserLoggedIn } = storeToRefs(authStore);
    const languages = [
      { label: "PL", value: "pl" },
      { label: "EN", value: "en" },
    ];
    return {
      tabs,
      isCurrentPath,
      isUserLoggedIn,
      authStore,
      languages,
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
  padding: 0 24px;
  max-width: 1440px;
  @include breakpoint-xl {
    margin: 0 auto;
  }
  @include breakpoint-sm {
    padding: 0 48px;
  }
  &__buttons {
    display: none;
    @include breakpoint-md-plus {
      @include flex();
    }
  }
  &__button {
    margin-right: 16px;
    &.router-link-active {
      background-color: $pink-fair;
    }
  }
  &__headers {
    display: none;
    @include breakpoint-md-plus {
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
    @include breakpoint-md-plus {
      display: none;
    }
  }
}
</style>
