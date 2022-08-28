<template>
  <div class="contact">
    <SectionTitle
      :font-size="titleSize"
      class="contact__title mb-48 text-center"
    >
      Contact Us
    </SectionTitle>
    <div class="contact__card">
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
    const titleSize = { default: "64px", small: "40px" };
    return { titleSize };
  },
};
</script>
<style lang="scss" scoped>
.contact {
  width: fit-content;
  margin-top: 144px;
  width: 100%;
  @include md {
    margin-top: 188px;
  }
}

.contact__card {
  padding: 24px 17px;
  margin: 0 auto 124px;
  background: $gray-athens;
  border-radius: 24px;
  @include font-roboto-mono(18px, 400, 32px, $gray-tuna);
  letter-spacing: 0.015em;
  width: 50%;
  min-width: 315px;
  max-width: 600px;
  @include sm {
    padding: 64px;
  }
}
.card__info {
  @include flex();
}
.info__text {
  display: inline-block;
}
</style>
