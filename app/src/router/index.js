import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import PersonalDetails from "@/views/PersonalDetails.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import FAQ from "@/views/FAQ.vue";

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/personal-details",
    name: "PersonalDetails",
    component: PersonalDetails,
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
