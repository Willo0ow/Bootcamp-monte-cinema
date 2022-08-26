<template>
  <div class="center-self contact-container">
    <SectionTitle size="64" class="mb-48 text-center">
      Contact Us
    </SectionTitle>
    <div class="contact-card">
      <div class="mb-40 card__info">
        <LocationIcon class="mr-16" />
        <div class="info__text">
          Monterail Sp. z o.o.<br />
          ul. Oławska 27-29<br />
          50-123 Wrocław<br />
          Poland
        </div>
      </div>
      <div class="mb-40 card__info">
        <EmailIcon class="mr-16" />
        <div>hello@monterail.com</div>
      </div>
      <div class="card__info">
        <PhoneIcon class="mr-16" />
        <div>+48 533 600 136</div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from "@components/common/SectionTitle.vue";
import LocationIcon from "@assets/images/icons/locationIcon.svg?component";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg?component";
import EmailIcon from "@assets/images/icons/emailIcon.svg?component";
export default {
  components: { SectionTitle, LocationIcon, PhoneIcon, EmailIcon },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.contact-container {
  width: fit-content;
  margin-top: 188px;
  @include max-sm {
    margin-top: 144px;
  }
}
.contact-card {
  width: 600px;
  margin-bottom: 124px;
  background: $gray-athens;
  padding: 64px;
  border-radius: 24px;
  @include font-roboto-mono(18px, 400, 32px, $gray-tuna);
  letter-spacing: 0.015em;
  box-sizing: border-box;
  @include max-sm {
    padding: 24px 17px;
    width: 315px;
  }
}
.card__info {
  @include flex();
}
.info__text {
  display: inline-block;
}
</style>
