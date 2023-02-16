import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';

const routes = [
  {
   path: '/',
   name: 'Home',
   component: Home,
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
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router