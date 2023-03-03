<template><!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
  <UserSideBar/>
  <div >
    <div class="p-4 sm:ml-64">
      <div v-if="user" class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <CandidateDashboard v-if="user.userType === 'candidate'" :user="user"/>
        <EmployerDashboard  v-if="user.userType === 'employer'" :user="user" /> 
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';
import UserSideBar from '../components/UserSideBar.vue';
import CandidateDashboard from '../views/CandidateDashboard.vue'
import EmployerDashboard from '../views/EmployerDashboard.vue'
import { onMounted,ref } from 'vue';
//import getCreatedJobsService from '../services/employerService';

export default {
  components:{
    UserSideBar,
    CandidateDashboard,
    EmployerDashboard,
  },
  setup() {
    const user = ref(null);
    const userStore = useUserStore();

    onMounted(async () => {
      user.value = await userStore.fetchUser();
    })
    return { user }
  }
}




</script>

<style></style>