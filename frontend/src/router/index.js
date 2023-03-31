import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import EditUserProfile from "../views/EditUserProfile.vue";
import Dashboard from "../views/Dashboard.vue";
import JobDescription from "../views/JobDescription.vue";
import CreateJobPosting from "../views/CreateJobPosting.vue";
import MyResume from "../views/MyResume.vue";
import MyResumev2 from "../views/MyResumev2.vue";
import { useUserStore } from "../store/user";
import AboutUs from "../views/AboutUs.vue";
import Services from "../views/Services.vue";
import Candidates from "../views/Candidates.vue";
import ManageJobs from "../views/ManageJobs.vue";
import ManageUsers from "../views/ManageUsers.vue";
import AlternateJob from "../views/AlternateJob.vue";

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
    path: "/manage-jobs",
    name: "ManageJobs",
    component: ManageJobs,
    meta: {
      title: "ManageJobs",
      auth: true,
    },
  },

  {
    path: "/manage-users",
    name: "ManageUsers",
    component: ManageUsers,
    meta: {
      title: "ManageUsers",
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
  {
    name: "MyResume",
    component: MyResume,
    path: "/my-resume",
    meta: {
      title: "My-Resume",
      auth: true,
    },
  },
  {
    name: "MyResumev2",
    component: MyResumev2,
    path: "/my-resumev2",
    meta: {
      title: "My-Resumev2",
      auth: true,
    },
  },
  {
    name: "AboutUs",
    component: AboutUs,
    path: "/aboutus",
    meta: {
      title: "AboutUs",
      auth: false,
    },
  },
  {
    name: "Services",
    component: Services,
    path: "/services",
    meta: {
      title: "Services",
      auth: false,
    },
  },
  {
    name: "Candidates",
    component: Candidates,
    path: "/candidates/:jobId",
    meta: {
      title: "Candidates",
      auth: true,
    },
  },
  {
    path: "/job2",
    name: "AlternateJob",
    component: AlternateJob,
    meta: {
      title: "AlternateJob",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Route guard for auth routes
router.beforeEach(async (to, from, next) => {
  const user = await useUserStore().fetchUser();

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
