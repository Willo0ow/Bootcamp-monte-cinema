<template>
  <div>Reservations</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import {
  retrieveUserReservations,
  UserReservation,
} from "@/api/useReservationApi";
import { ref, Ref, onMounted } from "vue";

const authStore = useAuthStore();
const { user: currentUser } = storeToRefs(authStore);
type Reservations = Array<UserReservation>
const reservations: Ref<Reservations> = ref([]);
onMounted(async () => {
  reservations.value = await retrieveUserReservations(currentUser.value.email);
});
</script>

<style lang="scss" scoped></style>
