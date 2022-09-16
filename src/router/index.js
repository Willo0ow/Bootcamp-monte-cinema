import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/HomePage.vue"),
      name: "Home",
    },
    {
      path: "/movies",
      component: () => import("@/pages/MoviesPage.vue"),
      name: "Movies",
    },
    {
      path: "/movie/:id",
      component: () => import("@/pages/MovieDetailsPage.vue"),
      name: "MovieDetails",
    },
    {
      path: "/screenings",
      component: () => import("@/pages/ScreeningsPage.vue"),
      name: "Screenings",
    },
    {
      path: "/contactUs",
      component: () => import("@/pages/ContactPage.vue"),
      name: "ContactUs",
    },
    {
      path: "/register",
      component: () => import("@/pages/RegisterPage.vue"),
      name: "Register",
      meta: { navVariant: "NavBarRegister" },
    },
    {
      path: "/login",
      component: () => import("@/pages/LoginPage.vue"),
      name: "Login",
      meta: { navVariant: "NavBarRegister" },
    },
    {
      path: "/makeReservation/:seanceId",
      component: () => import("@/pages/ReservationPage.vue"),
      name: "MakeReservation",
    },
    {
      path: "/reservationSummary/:reservationId",
      component: () => import("@/pages/ReservationSummaryPage.vue"),
      name: "ReservationSummary",
    },
  ],
});
export default router;
