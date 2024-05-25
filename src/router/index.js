import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Wellcome",
      component: () => import("../views/WellcomeView.vue"),
    },
  ],
});

export default router;
