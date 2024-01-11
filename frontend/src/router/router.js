import StartsPage from "@/pages/StartsPage";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: StartsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router