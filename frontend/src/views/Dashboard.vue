<template><!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
  <UserSideBar/>
  <div >
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <CandidateDashboard v-if="user.data.userType === 'candidate'" />
        <EmployerDashboard v-else />
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
import getCreatedJobsService from '../services/employerService';

export default {
  components:{
    UserSideBar,
    CandidateDashboard,
    EmployerDashboard,
  },
  setup() {
    const user = useUserStore().user;
    const data = ref(null);

    onMounted(async () => {
       try{
        const res =  await getCreatedJobsService.getCreatedJobs(user.data._id);
        data.value = res;
       }catch(error){
        console.log('ERROR', error.message)
       }

    })

    return { user, data,}
  }
}




</script>

<style></style>