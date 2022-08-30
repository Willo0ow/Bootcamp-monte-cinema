<template>
  <div class="contact">
    <SectionTitle variation="40-64" class="mb-48 text-center">
      Contact Us
    </SectionTitle>
    <ContactCard />
  </div>
</template>
<script>
import SectionTitle from "@components/common/SectionTitle.vue";
import ContactCard from "../common/ContactCard.vue";
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
  @include md {
    margin-top: 188px;
  }
}
</style>
