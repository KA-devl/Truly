import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import EditUserProfile from "../views/EditUserProfile.vue";
import Dashboard from "../views/Dashboard.vue";
import JobDescription from "../views/JobDescription.vue";
import CreateJobPosting from "../views/CreateJobPosting.vue";
import { useUserStore } from "../store/user";

// TEMPORARY
import EmployerDashboard from "../views/EmployerDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      auth: true,
    },
  },
  {
    path: "/job",
    name: "JobDescription",
    component: JobDescription,
    meta: {
      title: "JobDescription",
      auth: true,
    },
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
    meta: {
      title: "Login",
      auth: false,
    },
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
    meta: {
      title: "Register",
      auth: false,
    },
  },
  {
    name: "EditUserProfile",
    component: EditUserProfile,
    path: "/edit-user-profile",
    meta: {
      title: "Edit profile",
      auth: true,
    },
  },
  {
    name: "CreateJob",
    component: CreateJobPosting,
    path: "/create-job",
    meta: {
      title: "Create-job",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user = useUserStore().user;

  if (to.matched.some((res) => res.meta.auth)) {
    //require auth? if yes :
    if (user) {
      next(); //if user authenticated, then he can navigate
      return;
    }
    next({ name: "Login" });
    return;
  }
  next(); //if the path doesnt require auth, then user can go to it
});

export default router;
