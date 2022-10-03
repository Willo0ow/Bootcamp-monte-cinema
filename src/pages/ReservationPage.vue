<template>
  <div class="reservation">
    <div class="reservation__panel-headers">
      <PanelSelector
        v-for="(panel, index) in contentPanels"
        :key="panel.order"
        :order="panel.order"
        :active="activePanel === index"
        >{{ panel.selectorLabel }}</PanelSelector
      >
    </div>
    <SectionTitle class="reservation__title" variation="40-48">{{
      contentPanels[activePanel].title
    }}</SectionTitle>
    <MovieCardDetailed :movie="movie" v-if="movie" class="reservation__movie">
      <template #cardActions>
        <CustomChip class="reservation__seance-time">{{
          seanceTime
        }}</CustomChip></template
      >
    </MovieCardDetailed>
    <HallPlan class="reservation__hall" v-if="activePanel === 0" />
    <DefineTickets v-else />
  </div>
</template>

<script>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import HallPlan from "@components/Reservation/HallPlan.vue";
import MovieCardDetailed from "@components/common/MovieCardDetailed.vue";
import CustomChip from "@components/common/CustomChip.vue";
import { computed } from "vue";
import SectionTitle from "@components/common/SectionTitle.vue";
import PanelSelector from "@components/Reservation/PanelSelector.vue";
import DefineTickets from "@components/Reservation/DefineTickets.vue";
import { formatSeanceDatetime } from "@helpers/useFormatSeanceDatetime";

export default {
  components: {
    HallPlan,
    MovieCardDetailed,
    CustomChip,
    SectionTitle,
    PanelSelector,
    DefineTickets,
  },
  setup() {
    const contentPanels = [
      {
        order: 1,
        selectorLabel: "Choose seats",
        title: "Choose your seats",
        component: "HallPlan",
      },
      {
        order: 2,
        selectorLabel: "Book tickets",
        title: "Choose your tickets",
        component: "DefineTickets",
      },
    ];
    const reservationStore = useReservationStore();
    const { seance, hall, movie, activePanel } = storeToRefs(reservationStore);
    const seanceTime = computed(() =>
      formatSeanceDatetime(seance.value?.datetime)
    );

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
      contentPanels,
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
