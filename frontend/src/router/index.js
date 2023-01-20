import { createRouter, createWebHistory } from 'vue-router';
import displayList from '../views/DisplayList.vue';


const routes = [
  {
   path: '/',
   name: 'Product list',
   component: displayList,
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router