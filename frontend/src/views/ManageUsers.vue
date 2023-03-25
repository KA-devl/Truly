<template>
  <UserSideBar />
  <div >
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

      </div>
    </div>
  </div>
</template>

<script>
import PostingTable from '../components/PostingTable.vue';
import { onMounted,ref } from 'vue';
import userService from '../services/userService';
import UserSideBar from '../components/UserSideBar.vue';

export default {
props: [],
components: {
    PostingTable,
    UserSideBar
},
setup() {
    const data = ref(null);
    const headers = ["Job Title", "Position Type","Created at", "Status", ""];
    
    
    onMounted(async () => {
        data.value =  await userService.getAllJobs();
    });

    return {
        data,
        headers
    }
}
}
</script>