<template>
  <div class="contact">
    <SectionTitle variation="40-64" class="contact__title">
      Contact Us
    </SectionTitle>
    <ContactCard />
  </div>
</template>
<script>
import SectionTitle from "@components/common/SectionTitle.vue";
import ContactCard from "@components/common/ContactCard.vue";
export default {
  components: { SectionTitle, ContactCard },
  setup() {},
};
</script>
<style lang="scss" scoped>
.contact {
  width: fit-content;
  margin-top: 144px;
  width: 100%;
  @include breakpoint-md {
    margin-top: 188px;
  }
  &__title {
    margin-bottom: 48px;
    text-align: center;
  }
}
</style>
