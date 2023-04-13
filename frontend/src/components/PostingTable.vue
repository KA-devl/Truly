<template>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal"> <!-- Job postings table -->
                <thead>
                    <tr>
                        <th v-for="header in headers" :key="header" scope="col"
                            class="px-10 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <!-- EMPLOYER TABLE BODY-->
                <tbody v-if="user.userType === 'employer'">
                    <tr v-for="job in paginatedData" :key="job._id">
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex items-center">
                                <router-link v-if="job._id" :to="{ name: 'Candidates', params: { jobId: job._id } }">
                                    <p class="text-gray-900 whitespace-no-wrap hover:text-blue-500">
                                        {{ job.name }}
                                    </p>
                                </router-link>
                            </div>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ job.jobStatus[0] }}
                            </p>
                        </td>

                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ formatDate(job.creationDate) }}
                            </p>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <span v-if="!job.is_faulfilled"
                                class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 z-3">
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
                        <td class="px-0 py-0 text-sm bg-white border-b border-gray-200">
                            <div class="sm:col-span-2 flex justify-between items-center">
                                <button @click="deleteJob(job._id)"
                                    class="inline-block hover:bg-red-300 active:bg-red-500 focus-visible:ring ring-magenta-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                                </button>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- CANDIDATE TABLE BODY -->
                <tbody v-if="user.userType === 'candidate' || user.userType === 'admin'">

                    <Alert :errorMsg="errorMsg" />
                    <Alert :applyLoading="applyLoading" />
                    <Alert :successMsg="successMsg" />

                    <tr v-for="job in paginatedData" :key="job._id">
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <a v-if="job.authorId.avatar.imageUrl !== 'undefined'" href="#" class="relative block">
                                        <img alt="Logo" :src="job.authorId.avatar.imageUrl"
                                            class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <a v-if="job.authorId.avatar.imageUrl === 'undefined'" href="#" class="relative block">
                                        <img alt="Logo"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzl1DW0w9lJrVWAMzVhAzg-ZSd-L0QiAGOoqtP58&s"
                                            class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex items-center ml-4">
                                    <router-link v-if="job._id"
                                        :to="{ name: 'JobDescription', params: { jobId: job._id } }">
                                        <p class="text-gray-900 whitespace-no-wrap hover:text-blue-500">
                                            {{ job.name }}
                                        </p>
                                    </router-link>
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
                                    class="inline-block hover:bg-red-300 active:bg-red-500 focus-visible:ring ring-magenta-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                                </button>

                            </div>
                        </td>
                            <td v-if="isJobApplied(job._id)" class="px-10 py-8 text-sm bg-white border-b border-gray-200">
                                <button class=" text-green-500  rounded-full cursor-not-allowed" disabled>
                                    Applied
                                </button>
                            </td>
                            <td v-else class="px-10 py-8 text-sm bg-white border-b border-gray-200">
                                <button @click="applyForJob(job._id)" class="text-indigo-600 hover:text-indigo-900">
                                    Apply
                                </button>

                            </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div class="flex items-center">
                    <button @click="backPage" type="button"
                        class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>

                    <button v-for="item in Math.ceil(filteredItems.length / perPage)" :key="item" @click="() => goToPage(item)"
                        class="w-full px-4 py-2 text-base text-blue-500 bg-white border-t border-b hover:bg-gray-100 pagination- ">
                        {{ item }} </button>

                    <button @click="nextPage" type="button"
                        class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon';
import candidateService from "../services/candidateService";
import adminService from "../services/adminService";
import employerService from '../services/employerService';
import { ref, computed } from "vue";
import Alert from "../components/Alert.vue";
export default {
    emits: ["appliedForJobSignal"],
    props: ["data", "headers", "user", "searchFilter"],
    components: {
        Alert
    },
    setup(props) {
        const errorMsg = ref(null);
        const successMsg = ref(null);
        const applyLoading = ref(null);

        let page = ref(1);

        const perPage = 5;

        const paginatedData = computed(() =>
            filteredItems.value.slice((page.value - 1) * perPage, page.value * perPage)
        );

        const nextPage = () => {
            if (page.value !== Math.ceil(props.data.length / perPage)) {
                page.value += 1;
            }
        };

        const backPage = () => {
            if (page.value !== 1) {
                page.value -= 1;
            }
        };

        const goToPage = (numPage) => {
            page.value = numPage;
        };

        const filteredItems = computed(() => {
            if (props.data) {
                return props.data.filter((item) => {
                    return item.name.toLowerCase().includes(props.searchFilter.toLowerCase())
                })
            } else return [];
           
        })

        const applyForJob = async (jobPostId) => {
            applyLoading.value = 'Applying for job...';
            setTimeout(() => {
                applyLoading.value = '';
            }, 3000)
            const date = new Date();
            const isoDate = date.toISOString();
            let jobPackage = {
                candidateId: props.user._id,
                jobPostId: jobPostId,
                applicationStatus: "active",
                cv: props.user.resume.resumeUrl,
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
            return !!(props.user.jobApplication.find(e => e.jobPostId === jobId));
        }

        const deleteJob = async (jobId) => {
            try {
                if (props.user.userType === 'admin')
                {
                    await adminService.deleteJob(jobId);
                }
                else if (props.user.userType === 'employer'){
                    await employerService.deleteJob(jobId);
                }
                
                window.location.reload();
            } catch (error) {
                console.log('ERROR', error)
            }
        }

        const formatDate = (unformattedDate) => {
            const date = DateTime.fromISO(unformattedDate);
            return date.toLocaleString(DateTime.DATETIME_MED);
        };

        return { formatDate, isJobApplied, applyForJob, deleteJob, errorMsg, successMsg, applyLoading, paginatedData, perPage, page, nextPage, backPage, goToPage, filteredItems }

    }
}
</script>
<style>
button.active {
    background-color: #4CAF50;
}
</style>