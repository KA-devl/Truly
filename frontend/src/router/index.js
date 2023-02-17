import { createRouter, createWebHistory } from 'vue-router';
import displayList from '../views/DisplayList.vue';
import Login from '../components/Login.vue'
import EmployerDashboard from '../views/EmployerDashboard.vue';
import SignUp from '../components/SignUp.vue'

const routes = [
  {
   path: '/',
   name: 'Product list',
   component: displayList,
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
  name: "EmployerDashboard",
  component : EmployerDashboard,
  path: "/employerdashboard",
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router