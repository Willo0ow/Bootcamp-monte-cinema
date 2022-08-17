<template>
  <nav>
    <Logo />
    <div>
      <TabHeader v-for="tab in tabs" :key="tab">{{ tab }}</TabHeader>
    </div>
    <div class="nav-buttons">
      <CustomButton text>Register</CustomButton>
      <CustomButton>Login</CustomButton>
    </div>
  </nav>
</template>
<script>
import Logo from "@assets/images/logo.svg?component";
import CustomButton from "./CustomButton.vue";
import TabHeader from "./TabHeader.vue";
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
