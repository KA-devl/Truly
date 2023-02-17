<template>
    <UserSideBar />
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
            <h2 class="text-3xl font-semibold ">Edit profile</h2>
            <h2 class="text-2xl font-md text-gray-500 mt-4 ">Customize your website experience and manage your account
                preferences </h2>



            <!-- Left Side -->
            <div class="w-full  mt-4">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-blue-500 bg-gray-50 rounded-lg">
                    <div class="image overflow-hidden">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ user.data.name }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">@{{ user.data.username }}</h3>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">{{ user.data.createdAt }}</span>
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
                <div class="text-gray-700">
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
                            <div v-if="!isEdit" class="px-4 py-2">{{ email }}</div>
                            <input v-if="isEdit" class="py-2 px-4 rounded-xl border mt-1" v-model=email type="email"
                                name="email" placeholder="Email">
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
                " class="block w-full text-blue-500 text-sm font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xs p-3 my-4"
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
import { ref } from 'vue';
import { useUserStore } from '../store/user';
import userService from '../services/userService.js';

export default {
    components: {
        UserSideBar
    },
    setup() {
        const userStore = useUserStore();
        const user = userStore.user;
        const isEdit = ref(false);

        const name = ref(user.data.name);
        const username = ref(user.data.username);
        const email = ref(user.data.email);
        const mobileNumber = ref(user.data.mobileNumber);

        const saveEdit = () => {

            let newUser = {
                ...user,
                data: {
                    ...user.data,
                    name: name.value,
                    username: username.value,
                    email: email.value,
                    mobileNumber: mobileNumber.value
                }
            }
            console.log('the old user is ', user)
            console.log('the new  user is ', newUser)
            userService.updateUserProfile(user.data._id, newUser);
            userStore.setUser(newUser);
            let someUser = userStore.user;
            console.log('some user is now', someUser.data);

            name.value = someUser.data.name;
            console.log('name.value is now', name.value)
            username.value = someUser.data.username;
            email.value = someUser.data.email;
            mobileNumber.value = someUser.data.mobileNumber;

       

            isEdit.value = false;

            
        }


        return { isEdit, user, userStore, username, name, email, mobileNumber, saveEdit }

    }
}


</script>

<style></style>