<template>
  <div>Reservation</div>
  <HallPlan />
</template>

<script>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import HallPlan from "../components/Reservation/HallPlan.vue";

export default {
  components: { HallPlan },
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

<style lang="scss" scoped>
</style>
