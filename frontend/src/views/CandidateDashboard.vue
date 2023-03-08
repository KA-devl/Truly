<template><!-- Both candidate and emplyer have same dashboard. To display the data for candidate, you would have something like: <div v-if userType=="candidate"> .... show the user dashbaord </div>-->
    
        <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->

                  <!-- Dashboard stats start -->
                  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
              <div class=" grid grid-cols-2 md:grid-cols-4 bg-blue-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8 " style="position: absolute; right:45px; top=:10px;">
                <!-- stat - start -->
                <div class="flex flex-col items-center">
                  <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">4</div>
                  <div class="text-indigo-200 text-sm sm:text-base">New Jobs</div>
                </div>
                <!-- stat - end -->

                <!-- stat - start -->
                <div class="flex flex-col items-center">
                  <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">7</div>
                  <div class="text-indigo-200 text-sm sm:text-base">Jobs Applied</div>
                </div>
                <!-- stat - end -->

                <!-- stat - start -->
                <div class="flex flex-col items-center">
                  <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">3</div>
                  <div class="text-indigo-200 text-sm sm:text-base">Jobs Saved</div>
                </div>

                <!-- stat - start -->
                <div class="flex flex-col items-center">
                  <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">14</div>
                  <div class="text-indigo-200 text-sm sm:text-base">people have viewed your profile</div>
                </div>
                <!-- stat - end -->
              </div>
            </div>
            <!-- Dashboard stats end -->

        <h2 class="text-3xl font-semibold ">Dashboard</h2>
        <h2 class="text-2xl font-md text-gray-500 mt-4 ">Welcome back, <span class="text-blue-500">{{ user.name }}</span></h2>
        <br> <br>
        <div class="flex flex-row justify-between w-full mb-4 mt-6 sm:mb-0">
          <h2 class="text-2xl leading-tight">
            Open positions
          </h2>
          <div class="text-end">
            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div class=" relative ">
            <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Search"/>
            </div>
              <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white dark:bg-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-1 mt-1">
        </div>
        <div class="flex items-center justify-center mb-1 rounded">
          <div v-if="data" class=" w-full">
            <PostingTable :data="data" :headers="headers" :user="user"/>
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