<template><!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
  <UserSideBar/>
  <CandidateDashboard v-if="isCandidate" />
  <EmployerDashboard v-else />
</template>

<script>
import { useUserStore } from '../store/user';
import UserSideBar from '../components/UserSideBar.vue';
import CandidateDashboard from '../views/CandidateDashboard.vue'
import EmployerDashboard from '../views/EmployerDashboard.vue'
import { onMounted,ref } from 'vue';
import getCreatedJobsService from '../services/employerApi/getCreatedJobsService';

export default {
  components:{
    UserSideBar,
    CandidateDashboard,
    EmployerDashboard,
  },
  setup() {
    const user = useUserStore().user;
    const data = ref(null);
    const headers = ["Job Title", "Organization", "Position Type", "Location", "Date Created", "Status"];
    
    // TEMPORARY VARIABLE
    const isCandidate = true;

    onMounted(async () => {
        const res =  await getCreatedJobsService.getCreatedJobs(user.data._id);
        data.value = res;
        
    })

    return { user, data, headers, isCandidate }
  }
}




</script>

<style></style>