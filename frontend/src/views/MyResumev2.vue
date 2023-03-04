<template>
  <UserSideBar />
  <div v-if="user" class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
      <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->

      <h2 class="text-3xl font-semibold ">My resume</h2>
      <h2 class="text-2xl font-md text-gray-500 mt-4 ">Upload your resume for your applications</h2>


      <div v-if="user.resume.resumeUrl === 'undefined'" class="mt-10 bg-white border border-gray-200 rounded-lg shadow-md w-full">
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current resume</h5>

          <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg "
            disabled>There is no current resume to display. Please upload your resume first</button>
        </div>
      </div>

      <div v-if="user.resume.resumeUrl !== 'undefined'" class="mt-10 bg-white border border-gray-200 rounded-lg shadow-md w-full">
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current resume</h5>

  
        </div>
        <embed :src="user.resume.resumeUrl" class="w-full h-screen" />
      </div>



      <div class="flex items-center justify-center w-full mt-10">
        <label for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">Click to upload</span> or
              drag and drop</p>
            <p class="text-xs text-gray-500 ">.docx, .doc, .pdf, .txt</p>
          </div>
          <input id="dropzone-file" ref="file" type="file" class="hidden" @change="handleFileUpload()" />
        </label>
      </div>
      <div v-if="errorMsg" class="alert alert-error shadow-lg mt-10">
        <div class="px-3 py-6 bg-red-400 text-white flex justify-between rounded">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
            <p>{{ errorMsg }}</p>
          </div>
        </div>
      </div>
      <div v-if="successMsg" class=" hadow-lg mt-10">
        <div class="px-3 py-6 bg-green-400 text-white flex justify-between rounded">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
            <p>{{ successMsg }}</p>
          </div>
        </div>
      </div>




    </div>

  </div>
</template>
<script>
import UserSideBar from '../components/UserSideBar.vue';
import { useUserStore } from '../store/user';
import userService from '../services/userService';
import { ref, onMounted } from "vue";

export default {
  components: {
    UserSideBar
  },
  setup() {
     const user = ref(null);
    const userStore = useUserStore();
    const file = ref(null);
    const errorMsg = ref(null);
    const successMsg = ref(null);

      onMounted(async () => {
      user.value = await userStore.fetchUser();
    })

    const handleFileUpload = async () => {
      let formData = new FormData();
      formData.append('resume', file.value.files[0]);

      try {
     
        await userService.updateUserResume(user.value.id, formData);
        successMsg.value = 'File uploaded successfully';

        user.value = await userStore.fetchUser();
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

    return { user, handleFileUpload, file, errorMsg, successMsg }

  }
}


</script>

<style></style>