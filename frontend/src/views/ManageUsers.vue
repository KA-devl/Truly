<template>
  <UserSideBar />
  <div >
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div>

<h2 class="text-3xl font-semibold ">Manage Active Users</h2>
<!-- Card Section -->
<div >
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 border-y border-gray-200 mt-5 ">
    <!-- Card -->
    <div
      class="p-4 md:p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-gray-700">
      <div>
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </svg>

        <div class="mt-3">
          <div class="flex items-center gap-x-2">
            <p class="text-xs uppercase tracking-wide text-gray-500">
              Total users
            </p>
            <div class="hs-tooltip">
             
            </div>
          </div>
          <div class="mt-1 lg:flex lg:justify-between lg:items-center">
            <h3 v-if="data" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {{data.length}}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->

  </div>
  <!-- End Grid -->
</div>
<!-- End Card Section -->
<div class="flex flex-row justify-between w-full mb-1 mt-4 sm:mb-0">
  
  <h2 class="text-2xl font-md text-gray-800 mt-4 ">Job postings</h2>

  <div class="text-end">
    <form
      class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
      <div class=" relative ">
        <input type="text" id="&quot;form-subscribe-Filter"
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
          placeholder="Search" />
      </div>
      <button
        class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white dark:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:dark:bg-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="submit">
        Filter
      </button>
    </form>
  </div>
</div>
<div class="grid grid-cols-3 gap-4 mb-4 mt-4">
</div>
<div class="flex items-center justify-center mb-4 rounded">
  <div v-if="data" class=" w-full">
    <UserTable :headers="headers" :data="data" :user="user"/>
  </div>
</div>

</div>
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from '../components/UserTable.vue';
import { onMounted,ref } from 'vue';
import userService from '../services/userService';
import UserSideBar from '../components/UserSideBar.vue';
import { useUserStore } from '../store/user';
import adminService from '../services/adminService';

export default {
    props: [],
    components: {
      UserTable,
      UserSideBar
    },
    setup() {
        const data = ref(null);
        const headers = ["Name", "Username","Created at", "UserType", ""];
        const user = ref(null);
        const userStore = useUserStore();
        
        onMounted(async () => {
            user.value = await userStore.fetchUser();
            data.value =  await adminService.getUsers();
        });

        return {
            data,
            headers,
            user,
        }
    }
}
</script>