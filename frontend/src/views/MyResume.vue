<template>
    <UserSideBar />
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <!-- ALL YOUR CODE MUST BE INSIDE THIS TAG (OR ELSE IT WILL CAUSE OVERFLOW) -->
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <!-- text - start -->
            <div class="mb-10 md:mb-16">
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My Resume</h2>
  
              <!-- <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"></p> -->
            </div>
            <!-- text - end -->
  
            <!-- form - start -->
            <form @submit.prevent="" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">

            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Skills</label>
              <AddTags :tags="skills" :handleRemove="removeSkill" :handleAdd="addSkill" />
            
              
              <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Education</label>
              <div v-for="education in educations">
                <EducationCard :education="education" :removeEducation="removeEducation"/>
              </div>
              
              </div>
              <div class="sm:col-span-2 flex justify-between items-center">
                
                <button @click="addEducation"
                  class="inline-block bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                  Add Education
                </button>
  
                <span class="text-gray-500 text-sm"></span>
              </div>
  
              <div class="sm:col-span-2">
                <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Type*</label>
                <select
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                  <option selected disabled value="">Choose a job type</option>
                  <option value="contractual">Contractual</option>
                  <option value="permanent">Permanent</option>
                  <option value="temporary">Temporary</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>
  
              <div class="sm:col-span-2">
                <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Field*</label>
                <select
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                  <option selected disabled value="">Choose a field</option>
                  <option value="food">Agriculture, Food, and Natural Resources</option>
                  <option value="const">Architecture and Construction</option>
                  <option value="arts">Arts, Audio/Video Technology, and Communication</option>
                  <option value="busi">Business and Finance</option>
                  <option value="edu">Education and Training</option>
                  <option value="gov">Government and Public Administration</option>
                  <option value="health">Health Science</option>
                  <option value="info">Information Technology</option>
                  <option value="mark">Marketing</option>
                  <option value="sci">Science, Technology, Engineering, and Math</option>
                  <option value="law">Law, Public Safety, Corrections, and Security</option>
                  <option value="other">Other</option>
                </select>
              </div>
  
              <!-- <div class="sm:col-span-2">
          <label for="salary" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Start Date*</label>
          <input type="date" name="salary" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div> -->
  
  
              <div class="sm:col-span-2 flex justify-between items-center">
                <button @click="saveResume"
                  class="inline-block bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Save
                </button>
  
                <span class="text-gray-500 text-sm">*Required</span>
              </div>
              <div v-if="errorMsg" class="alert alert-error shadow-lg">
                <div class="px-3 py-6 bg-red-400 text-white flex justify-between rounded">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd" />
                    </svg>
                    <p>{{ errorMsg }}</p>
                  </div>
                </div>
              </div>
              <!-- <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p> -->
            </form>
            <!-- form - end -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserSideBar from '../components/UserSideBar.vue';
  import AddTags from '../components/AddTags.vue';
  import EducationCard from '../components/EducationCard.vue';
  import { ref } from 'vue';
  import { useUserStore } from '../store/user';
  import employerService from '../services/employerService';
  
  export default {
    components: {
      UserSideBar,
      AddTags,
      EducationCard,
    },
    setup() {
      const user = useUserStore().user;
    
      // FETCH SKILLS FROM BACKEND. SKILLS SHOULD BE A STRING ARRAY
        //Temporary skills array
      const skills = ref(["C++", "Java", "C#", "JavaScript", "React"]);

      // Dummy Educations array variable 
    //   const educations = ref([
    //     {
    //         id: 1,
    //         school: "Concordia",
    //         degreeType: "bachelor",
    //         specialization: "Software Engineering",
    //         grade: "4.20",
    //         start: "2022-01",
    //         end: "2025-12",
    //     },
    //     {
    //         id: 2,
    //         school: "Polytechnique",
    //         degreeType: "bachelor",
    //         specialization: "Mechanical Engineering",
    //         grade: "3.54",
    //         start: "2021-07",
    //         end: "2021-12",
    //     }
    //   ]);

    const educations = ref([]);


      const saveResume = () => {
        //NEED TO CHECK IF FIELDS ARE EMPTY

        let newResume = {
            skills: skills.value,
            educations: educations.value,
        }

        console.log(newResume);
      }

      const removeEducation = (education) => {
        educations.value.splice(educations.value.find((edu) => edu.id === education.id), 1)
      }

      const addEducation = () => {
        let ID = Math.floor(Math.random() * 100)
        let newEducation = {
            id: ID,
            school: "",
            degreeType: "",
            specialization: "",
            grade: "",
            start: "",
            end: "",
        }

        educations.value.push(newEducation);
      }

      const removeSkill = (skill) => {
        skills.value.splice(skills.value.indexOf(skill), 1);
      }

      const addSkill = (skill) => {
        skills.value.push(skill);
      }
  
      return {
        skills,
        educations,
        removeSkill,
        addSkill,
        removeEducation,
        addEducation,
        saveResume,
      };
    },
  
  }
  </script>