<template>
  <UserSideBar />
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Add a posting</h2>
          </div>
          <!-- text - end -->
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

          <!-- form - start -->
          <form @submit.prevent="addJob" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto mt-3">
            <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Title*</label>
              <input v-model="title" name="jobtitle" autocomplete="off"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Type*</label>
              <select v-model="type"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                <option selected disabled value="">Choose a job type</option>
                <option value="contractual">Contractual</option>
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Field*</label>
              <select v-model="field"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                <option selected disabled value="">Choose a field</option>
                <option value="food">Agriculture, Food, and Natural Resources</option>
                <option value="const">Architecture and Construction</option>
                <option value="arts">Arts, Audio/Video Technology, and Communication</option>
                <option value="busi">Business and Finance</option>
                <option value="edu">Education and Training</option>
                <option value="gov">Government and Public Administration</option>
                <option value="health">Health Science</option>
                <option value="info">Information Technology</option>
                <option value="mark">Marketing</option>
                <option value="sci">Science, Technology, Engineering, and Math</option>
                <option value="law">Law, Public Safety, Corrections, and Security</option>
                <option value="other">Other</option>
              </select>
            </div>


            <div class="sm:col-span-2">
              <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Description*</label>
              <textarea v-model="description" name="message"
                class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
              <button
                class="inline-block bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

              <span class="text-gray-500 text-sm">*Required</span>
            </div>
            <div v-if="errorMsg" class="alert alert-error shadow-lg">
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
          </form>
          <!-- form - end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSideBar from '../components/UserSideBar.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import employerService from '../services/employerService';

export default {
  components: {
    UserSideBar
  },
  setup() {
    const user = ref(null);
    const userStore = useUserStore();
    const title = ref('');
    const type = ref('');
    const field = ref('');
    const description = ref('');
    const errorMsg = ref('');
    const successMsg = ref(null);

    onMounted(async () => {
      user.value = await userStore.fetchUser();
    })

    const addJob = async () => {
      if (title.value && type.value && field.value && description.value) {
        let newJob = {
          authorId: user.value.id,
          name: title.value,
          jobStatus: type.value,
          careersFields: field.value,
          description: description.value,
          is_faulfilled: false
        }
        try {
          await employerService.createJob(newJob);

          successMsg.value = 'Successfully created job'

          setTimeout(() => {
            successMsg.value = '';
          }, 6000)

          title.value = '';
          type.value = '';
          field.value = '';
          description.value = '';

        } catch (error) {
          console.log('ERROR', error)
          errorMsg.value = error.response.data.message;
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        }
      }
      else {
        // TEMPORARY
        if (!title.value) {
          errorMsg.value = "Job Title is missing"
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        } else if (!type.value) {
          errorMsg.value = "Job Type is missing"
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        } else if (!field.value) {
          errorMsg.value = "Field is missing"
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        } else if (!description.value) {
          errorMsg.value = "Job description is missing"
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        }
      }
    };

    return {
      title,
      type,
      field,
      description,
      errorMsg,
      addJob,
      successMsg
    };
  },

}
</script>