import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import PersonalDetails from "@/views/PersonalDetails.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import FAQ from "@/views/FAQ.vue";
import Home from "@/views/Home.vue";
import UserHome from "@/views/UserHome.vue";
import GettingStarted from "@/views/GettingStarted.vue";
import HealthDec from "@/views/HealthDec.vue";
import ContactUs from "@/views/ContactUs.vue";
import MedFacils from "@/views/MedFacils.vue";
import FacilDetails from "@/views/FacilDetails";
import FacilConfirmation from "@/views/FacilConfirmation"
import ActiveAppointments from "@/components/ActiveAppointments"

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
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-home",
    name: "User Home",
    component: UserHome,
  },
  {
    path: "/getting-started",
    name: "Getting Started",
    component: GettingStarted,
  },
  {
    path: "/health-dec",
    name: "Health Dec",
    component: HealthDec,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs,
  },
  
  {
    path: "/med-facils", // channge router link after symtoms page in: /symtomps/med-facil
    name: "Medical Facilities",
    component: MedFacils,
  },
  
  {
    path: "/facil-details", // change router link after symtoms page in: /symtomps/facil-detials
    name: "Facility Detials",
    component: FacilDetails,
  },
  {
    path: "/facil-confirmation", // channge router link after symtoms page in: /symtomps/facil-detials/facil-confirmation
    name: "Facility Checkout",
    component: FacilConfirmation,
  },
  {
    path: "/facil-confirmation/active-appts", 
    name: "Active Appointments",
    component: ActiveAppointments,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
