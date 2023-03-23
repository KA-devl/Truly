<template>
  <UserSideBar />
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

          <!-- start -->

          <!-- component -->
          <div class="flex  ">

            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>bawspvp</p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Resune</td>
                        <td class="px-2 py-2">www.google.com</td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td class="px-2 py-2">+977 9955221114</td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">john@exmaple.com</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="text-center my-3">
                    <button class=" text-white py-1 px-4 rounded-full  bg-red-500 hover:bg-red-600 font-medium">Reject </button>
                    <button class=" text-white py-1 px-4 rounded-full ml-2 bg-green-500 hover:bg-green-600 font-medium">Hire </button>

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
export default {
  components: {
    UserSideBar
  },
  setup() {

  }
}


</script>