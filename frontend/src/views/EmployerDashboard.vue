<template>
  <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
  <div>

    <h2 class="text-3xl font-semibold ">Dashboard </h2>
    <h2 class="text-2xl font-md text-gray-500 mt-4 ">Welcome back, <span class="text-blue-500">{{ user.name }}</span></h2>
    <br> <br>
    <!-- Card Section -->
    <h2 class="text-2xl font-md text-gray-800  ">Job summary</h2>
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
                  Total created job postings
                </p>
                <div class="hs-tooltip">
                 
                </div>
              </div>
              <div class="mt-1 lg:flex lg:justify-between lg:items-center">
                <h3 v-if="data" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                 {{ data.length }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="p-4 md:p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-gray-700">
          <div>
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
            </svg>

            <div class="mt-3">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Total Applications
              </p>
              <div class="mt-1 lg:flex lg:justify-between lg:items-center">
                <h3 v-if="totalAppliedJobs" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {{totalAppliedJobs.length}}
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
        <form @submit.prevent="searchFilterData"
          class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
          <div class=" relative ">
            <input v-model="searchFilter" type="text" 
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
              placeholder="Search" />
          </div>
         
        </form>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 mb-4 mt-4">
    </div>
    <div class="flex items-center justify-center mb-4 rounded">
      <div v-if="data" class=" w-full">

        <PostingTable :data="data" :headers="headers" :user="user" :searchFilter="searchFilter"/>
      </div>
    </div>

</div>
</template>

<script>
import UserSideBar from '../components/UserSideBar.vue';
import PostingTable from '../components/PostingTable.vue';
import { onMounted, ref } from 'vue';
import JobsService from '../services/employerService';

export default {
  props: ["user"],
  components: {
    UserSideBar,
    PostingTable
  },
  setup(props) {
    const data = ref(null);
    const totalAppliedJobs = ref(null);
    const headers = ["Job Title", "Position Type", "Date Created", "Status", ""]
    const searchFilter = ref("");
  


    onMounted(async () => {
      data.value = await JobsService.getCreatedJobs(props.user._id);
      console.log(data.value)
      totalAppliedJobs.value = await JobsService.getAllJobsWhereCandidatesApplied(props.user._id);



    })

    return { headers, data, totalAppliedJobs, searchFilter,  }
  }
}


</script>

