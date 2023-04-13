<template>

  <UserSideBar/>
  <div >
    
    <div class="p-4 sm:ml-64">
      <div v-if="user" class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

        <CandidateDashboard v-if="user.userType === 'candidate'" :user="user"/>
        <EmployerDashboard  v-if="user.userType === 'employer'" :user="user" />
        <AdminPanel v-if="user.userType === 'admin'" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';
import UserSideBar from '../components/UserSideBar.vue';
import CandidateDashboard from '../views/CandidateDashboard.vue'
import EmployerDashboard from './EmployerDashBoard.vue'
import ManageJobs from './ManageJobs.vue';
import { onMounted,ref } from 'vue';
import AdminPanel from './AdminPanel.vue';

export default {
  components:{
    UserSideBar,
    CandidateDashboard,
    EmployerDashboard,
    ManageJobs,
    AdminPanel
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

