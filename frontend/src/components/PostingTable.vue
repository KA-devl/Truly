<template>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                  <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                    <table class="min-w-full leading-normal">
                          <thead>
                              <tr>
                                  <th v-for="header in headers" :key="header" scope="col" class="px-10 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      {{ header }}
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="job in data" :key="job._id">
                                  <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                                      <div class="flex items-center">
                                          <div class="flex-shrink-0">
                                              <a href="#" class="relative block">
                                                  <img alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                              </a>
                                          </div>
                                          <div class="ml-3">
                                              <p class="text-gray-900 whitespace-no-wrap">
                                                  {{job.name}}
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          {{job.jobStatus[0]}}
                                      </p>
                                  </td>
                                 
                                  <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                         {{job.creationDate}}
                                      </p>
                                  </td>
                                  <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                                      <span v-if="!job.is_faulfilled" class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                          </span>
                                          <span class="relative">
                                              active
                                          </span>
                                      </span>
                                      <span v-if="job.is_faulfilled" class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                          <span aria-hidden="true" class="absolute inset-0 bg-red-200 rounded-full opacity-50">
                                          </span>
                                          <span class="relative">
                                              filled
                                          </span>
                                      </span>
                                  </td>
                                  <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                                      <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                        Apply
                                      </a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
    
                      <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                          <div class="flex items-center">
                              <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                  <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                      </path>
                                  </svg>
                              </button>
                              <button type="button" class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                  1
                              </button>
                              <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                  2
                              </button>
                              <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                  3
                              </button>
                              <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                  4
                              </button>
                              <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                  <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                      </path>
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
    
</template>

<script>

export default {
    props: ["data", "headers"],
    setup()
    {
        
    }
}
</script>