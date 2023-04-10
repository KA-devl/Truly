<template>
  <div v-if="data" class="bg-white ">

    <body class="font-inter antialiased bg-white text-gray-800 tracking-tight">
      <!-- Page wrapper -->
      <div class="flex flex-col min-h-screen overflow-hidden">
        <!-- Site header -->

        <!-- Page content -->
        <main class="grow">
          <!-- Page content -->
          <section>
            <Alert :errorMsg="errorMsg" />
            <Alert :successMsg="successMsg" />
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
              <div class="pt-28 pb-8 md:pt-36 md:pb-16">
                <div class="md:flex md:justify-between" data-sticky-container>
                  <!-- Sidebar -->
                  <aside class="mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1">
                    <div data-sticky data-margin-top="32" data-sticky-for="768" data-sticky-wrap>
                      <div class="relative bg-gray-50 rounded-xl border border-gray-200 p-5">
                        <div class="text-center mb-6">
                          <img class="inline-flex mb-2" :src="data.authorId.avatar.imageUrl" width="72" height="72"
                            alt="Company 01" />
                          <h2 class="text-lg font-bold text-gray-800">
                            {{ data.authorId.name }}
                          </h2>

                        </div>

                        <div class="flex justify-center md:justify-start mb-5">
                          <ul class="inline-flex flex-col space-y-2">
                            <li class="flex items-center">
                              <svg class="shrink-0 fill-gray-400 mr-3" width="14" height="14"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M9.707 4.293a1 1 0 0 0-1.414 1.414L10.586 8H2V2h3a1 1 0 1 0 0-2H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z" />
                              </svg>
                              <span class="text-sm text-gray-600">{{ formatDate(data.creationDate) }}</span>
                            </li>
                            <li class="flex items-center">
                              <svg class="shrink-0 fill-gray-400 mr-3" width="14" height="16"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="2" />
                                <path
                                  d="M6.3 15.7c-.1-.1-4.2-3.7-4.2-3.8C.7 10.7 0 8.9 0 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4-.1Zm-2.7-5 3.4 3 3.4-3c1-1 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5S2 4.2 2 7c0 1.4.6 2.7 1.6 3.7 0-.1 0-.1 0 0Z" />
                              </svg>
                              <span class="text-sm text-gray-600">Montreal / Remote friendly</span>
                            </li>
                            <li class="flex items-center">
                              <svg class="shrink-0 fill-gray-400 mr-3" width="16" height="12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm-1 10H2V2h12v8Z" />
                                <circle cx="8" cy="6" r="2" />
                              </svg>
                              <span class="text-sm text-gray-600">To be discussed</span>
                            </li>


                          </ul>
                        </div>

                        <div class="max-w-xs inline-flex center mb-5">
                          <div v-if="isJobApplied(currentId)" type="button"
                            class="flex-shrink-0 px-4 py-2 text-base text-white bg-green-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-full mr-2 mb-2">
                            Already applied for this job!
                          </div>

                          <button v-else @click="applyForJob(currentId)" type="button"
                            class="flex-shrink-0 px-4 py-2 text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-2 mb-2">
                            Apply
                          </button>

                        </div>
                      </div>
                    </div>
                  </aside>

                  <!-- Main content -->
                  <div class="md:grow">
                    <!-- Job description -->
                    <div class="pb-8">
                      <div class="mb-4"></div>
                      <h1 class="text-4xl font-extrabold font-inter mb-10">
                        {{ data.name }}
                      </h1>

                      <!-- Job description -->
                      <div class="space-y-8 mb-8">
                        <div>
                          <h3 class="text-xl font-bold text-gray-800 mb-3">
                            The Role
                          </h3>
                          <div class="text-gray-500 space-y-3">
                            <p>
                              {{ data.description }}
                            </p>


                            <div>
                              Contract type : <span
                                class="bg-blue-500 text-white py-1 px-3 rounded-full font-semibold ">{{ data.jobStatus[0]
                                }}</span>
                            </div>

                          </div>
                        </div>

                        <div>


                        </div>
                      </div>
                      <!-- Social share -->
                    </div>
                    <div v-if="JobList">
                      <!-- Related jobs -->
                      <div class="mb-8">
                        <h4 class="text-2xl font-bold font-inter mb-8">
                          Related Jobs
                        </h4>
                        <!-- List container -->
                        <div v-for="job in shuffledArray" class="flex flex-col border-t border-gray-200">
                          <!-- Item -->
                          <div class="[&:nth-child(-n+12)]:-order-1 border-b border-gray-200 group">
                            <div class="px-4 py-6">
                              <div class="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                                <div class="shrink-0">
                                  <img :src="job.authorId.avatar.imageUrl" width="56" height="56" alt="Company 02" />
                                </div>
                                <div
                                  class="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
                                  <div>
                                    <div class="flex items-start space-x-2">
                                      <div class="text-sm text-gray-800 font-semibold mb-1">
                                        {{ job.authorId.name }}
                                      </div>
                                    </div>
                                    <div class="mb-2">
                                      <router-link :to="{ name: 'JobDescription', params: { jobId: job._id } }">
                                        <p class="text-lg text-gray-800 font-bold hover:text-blue-500">
                                          {{ job.name }}
                                        </p>
                                      </router-link>
                                    </div>
                                    <div class="-m-1">
                                      <a class="text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 bg-gray-100 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out"
                                        href="#0"> {{ formatDate(job.creationDate) }}</a>
                                      <a class="text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 bg-gray-100 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out"
                                        href="#0">{{ job.jobStatus[0] }}</a>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  </div>
</template>

<script>

import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch } from "vue";
import userService from "../services/userService";
import { DateTime } from "luxon";
import candidateService from "../services/candidateService";
import Alert from '../components/Alert.vue';
import { useUserStore } from "../store/user";
import RelatedJobs from "../components/RelatedJobs.vue";


export default {
  components: {
    Alert,
    RelatedJobs
  },
  setup() {
    const route = useRoute();
    const userStore = useUserStore();
    const user = ref(null);
    // Get current Id of route
    const currentId = route.params.jobId;
    const data = ref(null);
    const errorMsg = ref(null);
    const successMsg = ref(null);
    const JobList = ref(null);



    const formatDate = (unformattedDate) => {
      const date = DateTime.fromISO(unformattedDate);
      return date.toLocaleString(DateTime.DATETIME_MED);
    };

    const shuffledArray = computed(() => {
      const shuffled = [...JobList.value].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, 3);
    })


    const applyForJob = async (jobPostId) => {
      const date = new Date();
      const isoDate = date.toISOString();
      let jobPackage = {
        candidateId: user.value.id,
        jobPostId: jobPostId,
        applicationStatus: "active",
        cv: user.value.resume.resumeUrl,
        creationDate: isoDate
      }

      try {
        await candidateService.applyForJob(jobPackage);
        successMsg.value = 'Successfully applied for the job!'

        window.location.reload();
        
        setTimeout(() => {
          successMsg.value = '';
        }, 6000)


      } catch (error) {
        console.log('ERROR', error)
        errorMsg.value = error.response.data.message;
        setTimeout(() => {
          errorMsg.value = '';
        }, 6000)
      }

    }

    const isJobApplied = (jobId) => {
      if (user.value && user.value.jobApplication.find(e => e.jobPostId === jobId)) {
        return true;
      } return false;
    }

    watch(
      () => route.params.jobId,
      async newId => {
        data.value = await userService.getJob(newId);
        JobList.value = await userService.getAllJobs();
      }
    )
    onMounted(async () => {
      if (currentId) {
        data.value = await userService.getJob(currentId);
        console.log('DATA', data.value)
      }
      user.value = await userStore.fetchUser();
      JobList.value = await userService.getAllJobs();

    })
    return { data, formatDate, currentId, errorMsg, successMsg, user, applyForJob, isJobApplied, JobList, shuffledArray };
  },
};
</script>

