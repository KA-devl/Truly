<template>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th v-for="header in headers" :key="header" scope="col"
                            class="px-10 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
              <tbody>
                    <Alert :errorMsg="errorMsg" />
                    <Alert :successMsg="successMsg" />
                    <tr v-for="user in data" :key="user._id">
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <a href="#" class="relative block">
                                        <img alt="Logo"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU"
                                            class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.user }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">

                            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                                <span aria-hidden="true" class="absolute inset-0 bg-blue-200 rounded-full ">
                                </span>
                                <span class="relative">
                                    {{ job.jobStatus[0] }}
                                </span>
                            </span>

                        </td>

                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ formatDate(job.creationDate) }}
                            </p>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <span v-if="!job.is_faulfilled"
                                class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                </span>
                                <span class="relative">
                                    active
                                </span>
                            </span>
                            <span v-if="job.is_faulfilled"
                                class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span aria-hidden="true" class="absolute inset-0 bg-red-200 rounded-full opacity-50">
                                </span>
                                <span class="relative">
                                    filled
                                </span>
                            </span>
                        </td>
                        <td v-if="user.userType === 'admin'" class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="sm:col-span-2 flex justify-between items-center">
                                <button @click="deleteJob(job._id)"
                                    class="inline-block bg-red-500 hover:bg-red-700 active:bg-red-800 focus-visible:ring ring-magenta-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                    Remove
                                </button>

                            </div>
                        </td>
                        <div v-else>
                        <td v-if="isJobApplied(job._id)" class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <button class=" text-green-500  rounded-full cursor-not-allowed" disabled>
                                Applied
                            </button>
                        </td>
                        <td v-else class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <button @click="applyForJob(job._id)" class="text-indigo-600 hover:text-indigo-900">
                                Apply
                            </button>

                        </td>
                    </div>

                    </tr>
                

              </tbody>


            </table>
        </div>
    </div>
</template>
<script>
import { DateTime } from 'luxon';
import adminService from '../services/adminService';
import { ref } from 'vue';
import Alert from "../components/Alert.vue";
export default{
    components: {
        Alert
    },

    setup(props){
        const errorMsg = ref(null);
        const successMsg = ref(null);

        const formatDate = (unformattedDate) => {
            const date = DateTime.fromISO(unformattedDate);
            return date.toLocaleString(DateTime.DATETIME_MED);
        };
        return { formatDate, errorMsg, successMsg }
}
}
</script>