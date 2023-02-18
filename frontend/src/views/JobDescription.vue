<template>
<UserSideBar/>
<div class="bg-white py-6 sm:py-8 lg:py-12 sm:ml-64">
  <div class="max-w-screen-xl px-4 md:px-8 ">
    <div>
    <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Software engineers and designers</h1> <button type="button" class="flex-shrink-0 px-4 py-2 text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
    </div>
    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Description</h2> 
    <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
      Software engineers and designers research, design, evaluate, integrate and maintain software applications, technical environments, operating systems, embedded software, information warehouses and telecommunications software. They are employed in information technology consulting firms, information technology research and development firms, and information technology units throughout the private and public sectors, or they may be self-employed.
    </p>

    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Job duties</h2>

    <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
        <ul>
        <li>&#x2022; Collect and document users' requirements and develop logical and physical specifications </li>
        <li>&#x2022; Research, evaluate and synthesize technical information to design, develop and test computer-based systems including mobile applications </li>
        <li>&#x2022; Develop data, process and network models to optimize architecture and to evaluate the performance and reliability of designs </li>
        <li>&#x2022; Plan, design and coordinate the development, installation, integration and operation of computer-based systems including mobile applications </li>
        </ul>
    </p>
    <br>

    <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“I love working at Google!”</blockquote>

    <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center" />
    </div>

    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Essential Skills and Qualifications:</h2>

    <p class="text-gray-500 sm:text-lg">
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
</template>

<script>
import { useUserStore } from '../store/user';
import UserSideBar from '../components/UserSideBar.vue';
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