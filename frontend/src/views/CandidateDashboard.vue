<template><!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
    
        <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
        <h2 class="text-3xl font-semibold ">Dashboard</h2>
        <h2 class="text-2xl font-md text-gray-500 mt-4 ">Welcome back, <span class="text-blue-500">{{ user.name }}</span></h2>
        <div class="flex flex-row justify-between w-full mb-1 mt-4 sm:mb-0">
          <h2 class="text-2xl leading-tight">
            Job Postings
          </h2>
          <div class="text-end">
            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div class=" relative ">
            <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:dark:bg-gray-800 focus:border-transparent" placeholder="Search"/>
            </div>
              <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white dark:bg-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:dark:bg-gray-800 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-4 mt-4">
        </div>
        <div class="flex items-center justify-center mb-4 rounded">
          <div v-if="data" class=" w-full">
           
            <PostingTable :data="data" :headers="headers" :user="user"/>
            
        </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>

    </div>
  </template>
  
  <script>
  import UserSideBar from '../components/UserSideBar.vue';
  import PostingTable from '../components/PostingTable.vue';
  import { onMounted,ref } from 'vue';
  import userService from '../services/userService';
  
  export default {
    props : ["user"],
    components:{
      UserSideBar,
      PostingTable,
    },
    setup() {
      const data = ref(null);
  
      const headers = ["Job Title", "Position Type","Created at", "Status", ""];

  
      onMounted(async () => {
          data.value =  await userService.getAllJobs();
  
          
      })
  
      return { data, headers }
    }
  }
  
  
  
  
  </script>
  
  <style></style>