<template>
  <!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
  <h1>USER {{user}}</h1>

  




</template>
<script>
//import { onMounted } from 'vue';
import { useUserStore } from '../store/user';
export default {
  setup(){
    const user = useUserStore().user;


 


    return {user}
  }
}




</script>

<style>




</style>