<template>
    <UserSideBar />
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOWz) -->

            <h2 class="text-3xl font-semibold ">Edit profile</h2>
            <h2 class="text-2xl font-md text-gray-500 mt-4 ">Customize your website experience and manage your account
                preferences </h2>
            <!-- Left Side -->
            <div class="w-full  mt-4">
                <!-- Profile Card -->
                <div v-if="user" class="bg-white p-3 border-t-4 border-blue-500 bg-gray-50 rounded-lg">
                    <div class="image overflow-hidden">
                    </div>
                    <div v-if="user.userType === 'admin'">
                        <h1 class="text-red-600 font-bold text-xl leading-8 my-1">Admin Account</h1>
                        <h2 class="text-gray-600">Modify and Delete Users and Jobs</h2>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ user.name }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">@{{ user.username }}</h3>

                    <!-- Avatar -->
                    <div v-if="user.avatar.imageUrl !== 'undefined'" class="mt-2  ">
                        <img class="w-32 h-32 rounded-full " :src="user.avatar.imageUrl" alt="" />
                    </div>

                    <div v-if="user.avatar.imageUrl === 'undefined'" class="mt-2  ">
                        <img class="w-32 h-32 rounded-full "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzl1DW0w9lJrVWAMzVhAzg-ZSd-L0QiAGOoqtP58&s"
                            alt="" />
                    </div>


                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                        avatar</label>
                    <input class="block w-full text-sm text-gray-500 border bg-gray-50 rounded-lg cursor-pointer "
                        id="drop-zone-avatar" ref="file" type="file" @change="handleFileUpload()">
                    <p class="mt-1 text-sm text-gray-500" id="file_input_help">JPG, PNG only </p>



                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">{{ formatDate }}</span>
                        </li>
                    </ul>
                </div>
            </div>




            


            <!-- About Section -->
            <div class="bg-white p-3 shadow-sm rounded-sm bg-gray-50 rounded-xl">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                </div>
                <div v-if="user" class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Name</div>
                            <div v-if="!isEdit" class="px-4 py-2">{{ name }}</div>
                            <input v-if="isEdit
                            " class="py-2 px-4 rounded-xl border " v-model=name type="input" name="name"
                                placeholder="Name">
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Username</div>
                            <div v-if="!isEdit" class="px-4 py-2">{{ username }}</div>
                            <input v-if="isEdit" class="py-2 px-4 rounded-xl border" v-model=username type="input"
                                name="username" placeholder="Username">
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Email</div>
                            <div class="px-4 py-2">{{ email }}</div>

                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Contact No.</div>
                            <div v-if="!isEdit" class="px-4 py-2">+{{ mobileNumber }}</div>
                            <input v-if="isEdit" class="py-2 px-4 rounded-xl border mt-1" v-model=mobileNumber
                                type="mobileNumber" name="mobileNumber" placeholder="Mobile number">
                        </div>
                    </div>
                </div>
                <button v-if="!isEdit
                "
                    class="block w-full text-blue-500 text-sm font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xs p-3 my-4"
                    @click="isEdit = !isEdit">Edit profil information</button>
                <button v-if="isEdit"
                    class="block w-full text-red-400 text-sm font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xs p-3 my-4"
                    @click="isEdit = !isEdit">Cancel edit</button>
                <button v-if="isEdit"
                    class="block w-full bg-green-400 text-white text-sm font-semibold rounded-lg hover:bg-green-300 hover:shadow-xs p-3 my-4"
                    @click="saveEdit">Save</button>
            </div>
            <!-- End of about section -->
        </div>

    </div>
</template>
<script>
import UserSideBar from '../components/UserSideBar.vue';
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import userService from '../services/userService.js';
import { DateTime } from "luxon";

export default {
    components: {
        UserSideBar
    },
    setup() {
        const user = ref(null);
        const userStore = useUserStore();
        const isEdit = ref(false);
        const file = ref(null);
        const name = ref(null);
        const username = ref(null);
        const email = ref(null);
        const mobileNumber = ref(null);

        onMounted(async () => {
            user.value = await userStore.fetchUser();
            name.value = user.value.name;
            username.value = user.value.username;
            email.value = user.value.email;
            mobileNumber.value = user.value.mobileNumber;

        })

        const formatDate = computed(() => {
            const date = DateTime.fromISO(user.value.createdAt);
            return date.toLocaleString(DateTime.DATETIME_MED);
        });
        const saveEdit = () => {

            let newUser = {
                ...user,
                data: {
                    ...user.data,
                    name: name.value,
                    username: username.value,
                    mobileNumber: mobileNumber.value
                }
            }
            console.log('the old user is ', user.value)
            console.log('the new  user is ', newUser)
            userService.updateUserProfile(user.value.id, newUser);


            isEdit.value = false;

        }


        const handleFileUpload = async () => {
            let formData = new FormData();
            formData.append('image', file.value.files[0]);

            console.log(user.value.id, formData)

            try {

                await userService.updateUserAvatar(user.value.id, formData);
                console.log('file updated succesfully')
                user.value = await userStore.fetchUser();
            } catch (error) {
                console.log('ERROR', error)

            }
        }


        return { isEdit, user, userStore, username, name, email, mobileNumber, saveEdit, formatDate, handleFileUpload,file}

    }
}


</script>

<style></style>