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
      meta: { navVariant: "NavBarRegister" },
      component: () => import("@/pages/RegisterPage.vue"),
      children: [
        {
          path: "",
          name: "Register",
          component: () => import("@/components/Register/CredentialsSection.vue"),
        },
        {
          path: "",
          name: "RegisterDetails",
          component: () => import("@/components/Register/CredentialsSection.vue"),
        },
      ],
    },
  ],
});
export default router;
