<template>
  <nav>
    <Logo />
    <div class="nav-headers">
      <TabHeader v-for="tab in tabs" :key="tab">{{ tab }}</TabHeader>
    </div>
    <div class="nav-buttons">
      <CustomButton text>Register</CustomButton>
      <CustomButton>Login</CustomButton>
    </div>
    <NavigrationIcon class="nav-icon" />
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
    const tabs = ["Movies", "Screenings", "Contact Us"];
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
  @include max-sm {
    display: none;
  }
}
.nav-headers {
  @include max-sm {
    display: none;
  }
}
.nav-icon {
  display: none;
  @include max-sm {
    display: block;
  }
}
</style>
