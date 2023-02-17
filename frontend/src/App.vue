<template>
  <router-view />
</template>

<script>

import { useUserStore } from './store/user';
export default {
  name: 'App',

  setup(){
    const user = useUserStore().user;

    return {user};
  }
}
</script>

<style>

</style>