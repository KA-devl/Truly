<template>
  <Navbar v-if="!user"/>
  <UserSideBar v-if="user"/>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
import UserSideBar from './components/UserSideBar.vue';
import { useUserStore } from './store/user';
export default {
  name: 'App',
  components:{
    Navbar,
    UserSideBar
  },
  setup(){
    const user = useUserStore().user;

    return {user};
  }
}
</script>

<style>

</style>