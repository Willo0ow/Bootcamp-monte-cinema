<template>
  <div class="contact-card">
    <div class="contact-card__info">
      <LocationIcon class="contact-card__info-icon" />
      <div class="contact-card__info--long">
        Monterail Sp. z o.o.<br />
        ul. Oławska 27-29<br />
        50-123 Wrocław<br />
        Poland
      </div>
    </div>
    <div class="contact-card__info">
      <EmailIcon class="contact-card__info-icon" />
      <div>hello@monterail.com</div>
    </div>
    <div class="contact-card__info">
      <PhoneIcon class="contact-card__info-icon" />
      <div>+48 533 600 136</div>
    </div>
  </div>
</template>
<script>
import LocationIcon from "@assets/images/icons/locationIcon.svg?component";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg?component";
import EmailIcon from "@assets/images/icons/emailIcon.svg?component";
export default {
  components: { LocationIcon, PhoneIcon, EmailIcon },
};
</script>
<style lang="scss" scoped>
.contact-card {
  padding: 24px 17px;
  margin: 0 auto 124px;
  background: $gray-athens;
  border-radius: 24px;
  @include font-roboto-mono(18px, 400, 32px, $gray-tuna);
  letter-spacing: 0.015em;
  width: 50%;
  min-width: 315px;
  max-width: 600px;
  @include breakpoint-sm {
    padding: 64px;
  }
  &__info {
    @include flex();
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    &-icon {
      margin-right: 16px;
    }
  }
  &__info--long {
    display: inline-block;
  }
}
</style>
