import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';
import EditUserProfile from '../views/EditUserProfile.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
   path: '/',
   name: 'Home',
   component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: "Dashboard",
      auth: false
    }
   },
  {
    name: "Login",
    component : Login,
    path: "/login",
    meta: {
      title: "Login",
      auth: false
    }
},
{
  name: "SignUp",
  component : SignUp,
  path: "/signup",
  meta: {
    title: "Register",
    auth: false
  }
},
{
  name: "EditUserProfile",
  component : EditUserProfile,
  path: "/edit-user-profile",
  meta: {
    title: "Edit profile",
    auth: true
  }
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router