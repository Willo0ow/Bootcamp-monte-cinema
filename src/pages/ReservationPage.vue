<template>
  <div class="reservation">
    <div class="reservation__panel-headers">
      <PanelSelector order="1" :active="activePanel === 1"
        >Choose seat</PanelSelector
      >
      <PanelSelector order="2" :active="activePanel === 2"
        >Book tickets</PanelSelector
      >
    </div>
    <SectionTitle class="reservation__title" variation="40-48"
      >Choose your seats</SectionTitle
    >
    <MovieCardDetailed :movie="movie" v-if="movie" class="reservation__movie">
      <template #cardActions>
        <CustomChip class="reservation__seance-time">{{
          seanceTime
        }}</CustomChip></template
      >
    </MovieCardDetailed>
    <HallPlan class="reservation__hall" @selectSeats="selectSeats" />
  </div>
</template>

<script>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import HallPlan from "../components/Reservation/HallPlan.vue";
import MovieCardDetailed from "../components/common/MovieCardDetailed.vue";
import CustomChip from "../components/common/CustomChip.vue";
import { computed, ref } from "vue";
import { useWeekdays } from "../helpers/useWeekdays";
import SectionTitle from "../components/common/SectionTitle.vue";
import PanelSelector from "../components/Reservation/PanelSelector.vue";

export default {
  components: {
    HallPlan,
    MovieCardDetailed,
    CustomChip,
    SectionTitle,
    PanelSelector,
  },
  setup() {
    const reservationStore = useReservationStore();
    const { seance, hall, movie } = storeToRefs(reservationStore);
    const weekdays = useWeekdays();
    const seanceTime = computed(() => {
      if (seance.value) {
        const seanceDateTime = new Date(seance.value.datetime);
        const day = weekdays[seanceDateTime.getDay()].fullName;
        const date = seanceDateTime.toLocaleDateString().replace(/\./g, "/");
        const time = seanceDateTime.toTimeString().slice(0, 5);
        return `${day} ${date} - ${time}`;
      }
      return "";
    });
    const activePanel = ref(1);
    const selectedSeats = ref([]);

    function selectSeats(seats) {
      activePanel.value = 2;
      selectedSeats.value = seats;
    }

    const route = useRoute();
    onBeforeMount(async () => {
      await reservationStore.getSeanceData(route.params.seanceId);
    });
    return {
      seance,
      hall,
      movie,
      seanceTime,
      activePanel,
      selectSeats,
      selectedSeats,
    };
  },
};
</script>

<style lang="scss" scoped>
.reservation {
  &__panel-headers {
    @include flex(row, center, center);
    padding: 20px 24px;
    background-color: $pink-wisp;
  }
  &__title {
    margin-top: 64px;
    @include mx-screen-sm-only(24px);
  }
  &__movie {
    margin-top: 12px;
    @include breakpoint-sm {
      margin-top: 64px;
    }
    @include mx-screen-sm-only(24px);
  }
  &__seance-time {
    @include font-roboto-mono(16px, 500, 32px, $red-bittersweet);
    letter-spacing: 0.015em;
    padding-right: 16px;
    padding-left: 16px;
    @include breakpoint-sm {
      padding-right: 32px;
      padding-left: 32px;
    }
  }
  &__hall {
    margin-top: 32px;
    @include breakpoint-sm {
      margin-top: 64px;
    }
  }
}
</style>
