<template>
  <nav>
    <Logo />
    <div>
      <TabHeader v-for="tab in tabs" :key="tab" :title="tab" />
    </div>
    <div class="nav-buttons">
      <CustomButton label="Register" text />
      <CustomButton label="Login" />
    </div>
  </nav>
</template>
<script>
import Logo from "@assets/images/logo.svg?component";
import { TabHeader, CustomButton } from "./index";
export default {
  components: { Logo, TabHeader, CustomButton },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
}
.nav-buttons {
  display: flex;
}
</style>
