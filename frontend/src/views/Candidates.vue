<template>
  <UserSideBar />
  <Alert :errorMsg="errorMsg" />
  <Alert :successMsg="successMsg" />
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
      <h2 class="text-3xl font-semibold ">Candidates </h2>
      <h2 v-if="data?.length === 0" class="text-2xl font-md text-gray-500 mt-4 ">No candidates have applied for this job
        yet..</h2>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="container m-auto grid grid-cols-3 px-4 md:px-8 mx-auto space-x-4 space-y-4">
          <div v-for="user in data" :key="user._id">

            <div>
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div>
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ user.candidateId.name }}</h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>{{ user.candidateId.username }}</p>
                  </div>
                  <div v-if="user.candidateId.avatar.imageUrl !== 'undefined'"
                    class="mt-2 flex flex-row  justify-center items-center">
                    <img v-if="user.candidateId.avatar.imageUrl === 'undefined'" class="w-32 h-32 rounded-full "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzl1DW0w9lJrVWAMzVhAzg-ZSd-L0QiAGOoqtP58&s"
                      alt="" />
                    <img class="w-32 h-32 rounded-full " :src="user.candidateId.avatar.imageUrl" alt="" />

                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Resume</td>
                        <td class="px-2 py-2"><a class="text-blue-500" :href="user.candidateId.resume.resumeUrl" target="_blank"> Click
                            for resume</a></td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td class="px-2 py-2">{{ user.candidateId.mobileNumber }}</td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">{{ user.candidateId.email }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="text-center my-3">
                    <button v-if="user.applicationStatus[0] === 'active'"
                      class=" text-white py-1 px-4 rounded-full  bg-red-500 hover:bg-red-600 font-medium"
                      @click="rejectCandidate(user._id)">Reject
                    </button>
                    <button v-if="user.applicationStatus[0] === 'active'"
                      class=" text-white py-1 px-4 rounded-full ml-2 bg-green-500 hover:bg-green-600 font-medium"
                      @click="interviewCandidate(user._id)">Interview
                    </button>
                    <button v-if="user.applicationStatus[0] === 'interview'"
                      class=" text-white py-1 px-4 rounded-full ml-2 bg-blue-500 hover:bg-blue-600 font-medium"
                      disabled>Selected for interview
                    </button>
                    <button v-if="user.applicationStatus[0] === 'rejected'"
                      class=" text-white py-1 px-4 rounded-full ml-2 bg-red-500 hover:bg-red-600 font-medium"
                      disabled>Rejected for interview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSideBar from '../components/UserSideBar.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import employerService from '../services/employerService';
import Alert from '../components/Alert.vue';

export default {
  components: {
    UserSideBar, Alert
  },
  setup() {
    const data = ref(null);
    const route = useRoute();
    // Get current Id of route
    const currentId = route.params.jobId;
    const errorMsg = ref(null);
    const successMsg = ref(null);


    const interviewCandidate = async (applicationId) => {

      try {
        await employerService.setApplicationToInterview(applicationId);
        successMsg.value = 'Candidate selected for interview';
        data.value = await employerService.getAllCandidatesOfJob(currentId);
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
    const rejectCandidate = async (applicationId) => {

      try {
        await employerService.setApplicationToRejected(applicationId);
        successMsg.value = 'Candidate rejected for interview';
        data.value = await employerService.getAllCandidatesOfJob(currentId);
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

    onMounted(async () => {
      if (currentId) {
        data.value = await employerService.getAllCandidatesOfJob(currentId);
        console.log('the job are', data.value)
      }
    })

    return { data, interviewCandidate, rejectCandidate, errorMsg, successMsg }

  }
}


</script>