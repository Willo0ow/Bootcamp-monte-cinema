<template>
  <div>Reservation</div>
</template>

<script>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const reservationStore = useReservationStore();
    const { seance, hall, movie } = storeToRefs(reservationStore);
    const route = useRoute();
    onBeforeMount(async () => {
      await reservationStore.getSeanceData(route.params.seanceId);
    });
    return { seance, hall, movie };
  },
};
</script>

<style lang="scss" scoped></style>
