<template>
  <h2 class="text-3xl font-semibold ">Dashboard</h2>
  <h2 class="text-2xl font-md text-gray-500 mt-4 ">Welcome back, <span class="text-blue-500">{{ user.name }}</span></h2>




  <!-- Main modal -->
  <div v-if="isModalOpen" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  <div v-if="isModalOpen" class="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button @click="isModalOpen = false" type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
          data-modal-hide="crypto-modal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <!-- Modal header -->
        <div class="px-6 py-4 border-b rounded-t ">
          <h3 class="text-base font-semibold text-gray-900 lg:text-xl">
            Selected for interview jobs
          </h3>
        </div>
        <!-- Modal body -->
        <p class="text-sm font-normal text-gray-500 p-5">You have been selected to the following interviews. Please expect
          to be contacted in the next day.</p>
        <div v-if="selectedForInterviewJobs" v-for="job in selectedForInterviewJobs" :key="job.id" class="px-6 ">
          <div class="flex items-center p-3 mb-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  group ">

            <img :src="job.authorId.avatar.imageUrl" width="56" height="56" alt="Company 02" />

            <span  v-if="job.jobPostId.name.length > 15" class="flex-1 ml-3 whitespace-nowrap">{{ job.jobPostId.name.slice(0,15) }}..</span>
            <span  v-else class="flex-1 ml-3 whitespace-nowrap"> {{ job.jobPostId.name }}</span>
            <span
              class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">{{
                job.jobPostId.jobStatus[0] }}</span>
            <span
              class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-green-200 rounded ">{{
                job.applicationStatus[0] }}</span>
          </div>
        </div>
        <div>
          <br>
        </div>
      </div>
    </div>
  </div>
  <!-- Card Section -->
  <h2 class="text-2xl font-md text-gray-800 mt-4 ">Job summary</h2>

  <div>
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
                Toal available job postings
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
              <h3 v-if="user" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {{ user.jobApplication.length }}
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

  <!-- job interview-->
  <button v-if="selectedForInterviewJobs" @click="isModalOpen = true" type="button"
    class="relative inline-flex items-center p-3 text-md  text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none mt-3 ">
    You have ({{ selectedForInterviewJobs.length }}) job interview scheduled
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
    <span class="sr-only">Notifications</span>
    <div
      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
      {{ selectedForInterviewJobs.length }}</div>
  </button>

  <div class="flex flex-row justify-between w-full mb-4 mt-6 sm:mb-0">
    <h2 class="text-2xl leading-tight">
      Open positions
    </h2>
    <div class="text-end">
      <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
        <div class=" relative ">
          <input type="text" id="&quot;form-subscribe-Filter"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
            placeholder="Search" />
        </div>
        <button
          class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white dark:bg-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit">
          Filter
        </button>
      </form>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-4 mb-1 mt-1">
  </div>
  <div class="flex items-center justify-center mb-1 rounded">
    <div v-if="data" class=" w-full">
      <PostingTable :data="data" :headers="headers" :user="user" />
    </div>
  </div>
</template>
  
<script>
import UserSideBar from '../components/UserSideBar.vue';
import PostingTable from '../components/PostingTable.vue';
import { onMounted, ref } from 'vue';
import userService from '../services/userService';
import candidateService from '../services/candidateService';

export default {
  props: ["user"],
  components: {
    UserSideBar,
    PostingTable,
  },
  setup(props) {
    const data = ref(null);
    const isModalOpen = ref(false);
    const selectedForInterviewJobs = ref(null);

    const headers = ["Job Title", "Position Type", "Created at", "Status", ""];


    onMounted(async () => {
      data.value = await userService.getAllJobs();
      selectedForInterviewJobs.value = await candidateService.getSelectedForInterviewJobs(props.user._id);
      console.log(selectedForInterviewJobs.value)


    })

    return { data, headers, selectedForInterviewJobs, isModalOpen }
  }
}




</script>
  
<style></style>