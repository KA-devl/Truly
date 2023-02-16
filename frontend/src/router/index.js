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
   },
  {
    name: "Login",
    component : Login,
    path: "/login",
},
{
  name: "SignUp",
  component : SignUp,
  path: "/signup",
},
{
  name: "EditUserProfile",
  component : EditUserProfile,
  path: "/edit-user-profile",
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router