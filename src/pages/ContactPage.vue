<template>
  <div class="contact-page">
    <BreadCrumbs :steps="steps" :back-route="{ name: 'Home' }" />
    <SectionTitle class="contact-page__title">Contact Us</SectionTitle>
    <div class="contact-page__card">
      <div class="contact-page__image">
        <MapImage />
      </div>
      <ContactCard class="contact-page__details" />
      <div class="contact-page__icons">
        <TweeterIcon class="contact-page__icon" />
        <FacebookIcon class="contact-page__icon" />
        <LinkedinIcon class="contact-page__icon" />
        <InstagramIcon class="contact-page__icon" />
        <GitIcon class="contact-page__icon" />
        <BeIcon class="contact-page__icon" />
        <BasketballIcon class="contact-page__icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import MapImage from "@assets/images/map.svg?component";
import ContactCard from "../components/common/ContactCard.vue";

import TweeterIcon from "@assets/images/icons/tweeter.svg?component";
import FacebookIcon from "@assets/images/icons/facebook.svg?component";
import LinkedinIcon from "@assets/images/icons/linkedin.svg?component";
import InstagramIcon from "@assets/images/icons/instagram.svg?component";
import GitIcon from "@assets/images/icons/git.svg?component";
import BeIcon from "@assets/images/icons/be.svg?component";
import BasketballIcon from "@assets/images/icons/basketball.svg?component";

export default {
  setup() {
    const state = reactive({
      steps: [{ text: "Contact us", isLink: false }],
    });
    return {
      ...toRefs(state),
    };
  },
  components: {
    BreadCrumbs,
    SectionTitle,
    MapImage,
    ContactCard,
    TweeterIcon,
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
    GitIcon,
    BeIcon,
    BasketballIcon,
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  @include mx-screen-sm-only(24px);
  margin-bottom: 24px;
  &__title {
    margin-top: 40px;
    margin-bottom: 24px;
    @include breakpoint-md {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  }
  &__card {
    width: 100%;
    display: grid;
    border-radius: 8px;
    grid-template-columns: 1fr;
    @include breakpoint-lg {
      grid-template-columns: 1fr 1fr 80px;
    }
  }
  &__image {
    & svg {
      width: 100%;
      border-radius: 8px 8px 0 0;
      height: 284px;
      @include breakpoint-lg {
        height: 100%;
        border-radius: 8px 0 0 8px;
      }
    }
  }
  &__details {
    background-color: $gray-athens;
  }
  &__icons {
    @include flex(row, center);
    background-color: $gray-athens;
    padding-bottom: 24px;
    padding-top: 24px;
    border-radius: 0 0 8px 8px;
    border-top: 2px white solid;
    @include breakpoint-lg {
      border-radius: 0 8px 8px 0;
      @include flex(column, space-around);
    }
  }
  &__icon {
    margin-right: 8px;
    margin-left: 8px;
    @include breakpoint-lg {
      margin-right: 24px;
      margin-left: 24px;
    }
  }
}
</style>
