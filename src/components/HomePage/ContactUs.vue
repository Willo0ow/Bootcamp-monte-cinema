<template>
  <div class="center-self contact-container">
    <SectionTitle size="64" class="mb-48" style="text-align: center">
      Contact Us
    </SectionTitle>
    <div class="contact-card">
      <div class="mb-40" style="display: flex">
        <LocationIcon style="margin-right: 16px" />
        <div style="display: inline-block">
          Monterail Sp. z o.o.<br />
          ul. Oławska 27-29<br />
          50-123 Wrocław<br />
          Poland
        </div>
      </div>
      <div style="display: flex" class="mb-40">
        <EmailIcon style="margin-right: 16px" />
        <div>hello@monterail.com</div>
      </div>
      <div style="display: flex">
        <PhoneIcon style="margin-right: 16px" />
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
    const testData = "Contact Us";
    return {
      testData,
    };
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
</style>
