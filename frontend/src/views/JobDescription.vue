<template>
  <div class="bg-white py-24 sm:py-32">
    <UserSideBar/>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-4xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-blue-600 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg" alt="" />
            <div class="absolute inset-0 bg-blue-600 mix-blend-multiply" />
            <svg viewBox="0 0 1097 845" aria-hidden="true" class="absolute top-1/2 left-1/2 -ml-16 w-[68.5625rem] -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl">
              <path fill="url(#e7ccf164-908d-46dd-9194-2f8a16ad5a93)" fill-opacity=".4" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
              <defs>
                <linearGradient id="e7ccf164-908d-46dd-9194-2f8a16ad5a93" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#776FFF" />
                  <stop offset="1" stop-color="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <figure class="relative isolate">
              <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20">
                <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
              </svg>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" class="h-12 w-auto" />
              <blockquote class="mt-6 text-xl font-semibold leading-8 text-white">
                <p>“I love working at Google!”</p>
              </blockquote>
              <figcaption class="mt-6 text-sm leading-6 text-gray-300"><strong class="font-semibold text-white">Anas Senouci,</strong> CEO at Google</figcaption>
            </figure>
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <button type="button" class="flex-shrink-0 px-4 py-2 text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
            <p class="text-base font-semibold leading-7 text-blue-600">Google</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Software engineers and designers</h1> 
            <div class="max-w-xl">
              <p class="mt-6">Software engineers and designers research, design, evaluate, integrate and maintain software applications, technical environments, operating systems, embedded software, information warehouses and telecommunications software. They are employed in information technology consulting firms, information technology research and development firms, and information technology units throughout the private and public sectors, or they may be self-employed.</p>
              <br>
              <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Job duties</h2>
              <ul>
                <li>&#x2022; Collect and document users' requirements and develop logical and physical specifications </li>
                <li>&#x2022; Research, evaluate and synthesize technical information to design, develop and test computer-based systems including mobile applications </li>
                <li>&#x2022; Develop data, process and network models to optimize architecture and to evaluate the performance and reliability of designs </li>
                <li>&#x2022; Plan, design and coordinate the development, installation, integration and operation of computer-based systems including mobile applications </li>
              </ul>
              <br>
              <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Essential Skills and Qualifications:</h2>
              <p class="mt-8">
                  <ul>
                  <li>&#x2022; University degree in computer science or engineering (or equivalent) </li>
                  <li>&#x2022; Junior or Intermediate level experience in embedded system testing, design and engineering </li>
                  <li>&#x2022; 2+ years of C development (in an embedded environment is an asset) </li>
                  <li>&#x2022; Working knowledge of QNX or other embedded operating system </li>
                  <li>&#x2022; Familiar with source versioning, problem reporting (SVN, Git, JIRA) </li>
                  </ul>
              </p>
            </div>
            
          </div>
          <dl class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx">
              <dt class="text-sm font-semibold leading-6 text-gray-600">{{ stat.label }}</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
          <div class="mt-10 flex">
            <a href="#" class="text-base font-semibold leading-7 text-blue-600">Learn more about our company <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';
import UserSideBar from '../components/UserSideBar.vue';
const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
  ]
export default {
  components:{
    UserSideBar
  },
  setup() {
    const user = useUserStore().user;

    return { user }
  }
}




</script>

<style></style>