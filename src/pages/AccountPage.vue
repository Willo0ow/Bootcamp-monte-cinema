<template>
  <div class="account">
    <div class="account__tab-headers">
      <router-link :to="{ name: 'Account' }">
        <SectionTitle
          variation="24-32-48"
          class="account__tab-header"
          :color="route.name === 'Account' ? 'gray' : 'bombay'"
          >Personal Details</SectionTitle
        >
      </router-link>
      <router-link :to="{ name: 'UserReservations' }">
        <SectionTitle
          variation="24-32-48"
          :color="route.name === 'UserReservations' ? 'gray' : 'bombay'"
          >Reservations</SectionTitle
        >
      </router-link>
    </div>
    <div class="account__tab-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionTitle from "../components/common/SectionTitle.vue";
import { useRoute } from "vue-router";
import { RouteLocationNormalized } from "vue-router";

const route: RouteLocationNormalized = useRoute();
</script>

<style lang="scss" scoped>
.account {
  @include mx-screen-sm-only(24px);
  &__tab-headers {
    @include flex();
    margin-top: 48px;
    margin-bottom: 48px;
    @include breakpoint-sm {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  }
  &__tab-header:first-child {
    margin-right: 16px;
    @include breakpoint-md {
      margin-right: 64px;
    }
  }
  &__tab-content {
    @include breakpoint-md {
      box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
      border-radius: 24px;
      padding: 64px;
    }
  }
}
</style>
