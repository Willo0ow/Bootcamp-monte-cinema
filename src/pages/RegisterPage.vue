<template>
  <div class="register">
    <router-view
      @setRegisterProperty="setRegisterDataProperty"
      @registerUser="registerUser"
    ></router-view>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const registerData = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      areTermsAccepted: false,
    });
    function setRegisterDataProperty(property, newValue) {
      registerData[property] = newValue;
    }
    function registerUser() {
      console.log("register");
    }
    return { registerData, setRegisterDataProperty, registerUser };
  },
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 470px;
  padding-top: 64px;
  @include breakpoint-md {
    max-width: 605px;
    padding-top: 120px;
  }
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
