<template>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class=",min-w-full leading-normal">
                <thead>
                    <tr>
                        <th v-for="header in headers" :key="header" scope="col"
                            class="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody v-if="user.userType === 'admin' ">
                   
                    <Alert :errorMsg="errorMsg" />
                    <Alert :successMsg="successMsg" />
                    <tr v-for = "data in data" :key= "data._id">
                        <td class="px-12 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <a href="#" class="relative block">
                                        <img alt="Logo"
                                            src="https://avatarfiles.alphacoders.com/296/thumb-296257.jpg"
                                            class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="px-8 ml-4">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ data.name }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex-shrink-0">
                                <a href="#" class = "relative block">
                                </a>
                            </div>
                            <div class="ml-4">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{data.username}}
                                </p>
                            </div>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex-shrink-0">
                                <a href="#" class = "relative block">
                                </a>
                            </div>
                            <div class="ml-4">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{formatDate(data.createdAt)}}
                                </p>
                            </div>
                        </td>
                        <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                                <span aria-hidden="true" class="absolute inset-0 bg-blue-200 rounded-full ">
                                </span>
                                <span class="relative">
                                        {{ data.userType }}
                                 </span>
                            </span>
                            

                        </td>
                        <td>
                            <div class="px-10 py-5 sm:col-span-2 flex justify-between items-center">
                                <button @click="deleteUser(data._id)"
                                    class="inline-block bg-red-500 hover:bg-red-700 active:bg-red-800 focus-visible:ring ring-magenta-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                    Delete
                                </button>

                            </div>
                        </td> 
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
    props: ["data", "headers", "user"],
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