<template><!-- This is an example component -->
<div>
 
    <!-- End of Navbar -->

    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-blue-500 bg-gray-50 rounded-lg">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Anes kd</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">@bawspvp</h3>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
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
                                <div v-if="!isEdit" class="px-4 py-2">Anes kd</div>
                                <input v-if="isEdit
                                " class="py-2 px-4 rounded-xl border " v-model=name type="input" name="name" placeholder="Name">
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Username</div>
                                <div v-if="!isEdit" class="px-4 py-2">Bawspvp</div>
                                <input v-if="isEdit" class="py-2 px-4 rounded-xl border" v-model=username type="input" name="username" placeholder="Username">
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div v-if="!isEdit" class="px-4 py-2">anes1989@live.ca</div>
                                <input v-if="isEdit" class="py-2 px-4 rounded-xl border mt-1" v-model=email type="email" name="email" placeholder="Email">
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div v-if="!isEdit" class="px-4 py-2">+514 242 2123</div>
                                <input v-if="isEdit" class="py-2 px-4 rounded-xl border mt-1" v-model=mobileNumber type="mobileNumber" name="mobileNumber"
        placeholder="Mobile number">
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-500 text-sm font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xs p-3 my-4" @click="isEdit = !isEdit" >Edit profil information</button>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
               
                <!-- End of profile tab -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {ref} from 'vue';

export default{
  setup(){
    const isEdit = ref(false);


    return {isEdit}

  }
}


</script>

<style></style>