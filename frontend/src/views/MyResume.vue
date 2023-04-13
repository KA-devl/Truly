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
              <br />
              <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Work Experience</label>
              <div v-for="experience in workExperiences">
                <WorkExperienceCard :work="experience" :remove="removeWorkExperience" />
              </div>
              
              </div>
              <div class="sm:col-span-2 flex justify-between items-center">
                
                <button @click="addWorkExperience"
                  class="inline-block bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                  Add Work Experience
                </button>
  
                <span class="text-gray-500 text-sm"></span>
              </div>

              <br />
              <div class="sm:col-span-2">
              <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Projects</label>
              <div v-for="project in projects">
                <ProjectCard :project="project" :remove="removeProject" />
              </div>
              
              </div>
              <div class="sm:col-span-2 flex justify-between items-center">
                
                <button @click="addProject"
                  class="inline-block bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                  Add Project
                </button>
  
                <span class="text-gray-500 text-sm"></span>
              </div>



              <div class="sm:col-span-2">
                <br />
              <hr />
              </div>
              
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
  import WorkExperienceCard from '../components/WorkExperienceCard.vue';
  import ProjectCard from '../components/ProjectCard.vue';
  import { ref } from 'vue';
  
  export default {
    components: {
      UserSideBar,
      AddTags,
      EducationCard,
      WorkExperienceCard,
      ProjectCard,
    },
    setup() {
    
      const skills = ref(["C++", "Java", "C#", "JavaScript", "React"]);

      const educations = ref([]);


      const workExperiences = ref([]);

      const projects = ref([]);

      const errorMsg = ref("")

      const saveResume = () => {
        //NEED TO CHECK IF FIELDS ARE EMPTY

        let newResume = {
            skills: skills.value,
            educations: educations.value,
            workExperiences: workExperiences.value,
            projects: projects.value
        }

        let error = defineError(newResume);

        if (!error)
        {
          // SEND RESUME TO BACKEND
        }
        else {
          errorMsg.value = error;
          setTimeout(() => {
            errorMsg.value = '';
          }, 6000)
        }

        console.log(newResume);
      }

      const removeEducation = (education) => {
        educations.value.splice(educations.value.find((edu) => edu.id === education.id), 1)
      }

      const removeWorkExperience = (work) => {
        workExperiences.value.splice(workExperiences.value.find((exp) => exp.id === work.id), 1)
      }

      const removeProject = (proj) => {
        projects.value.splice(projects.value.find((project) => project.id === proj.id), 1)
      }

      const addWorkExperience = () => {
        let ID = Math.floor(Math.random() * 100)
        let newExperience = {
          id: ID,
          company: "",
          start: "",
          end: "",
          jobtype: "",
          location: "",
          jobtitle: "",
          message: "",
          competencies: []
      }

        workExperiences.value.push(newExperience);
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

      const addProject = () => {
        let ID = Math.floor(Math.random() * 100)
        let newProject = {
          id: ID,
          start: "",
          end: "",
          title: "",
          role: "",
          description: "",
          competencies: []
      }

        projects.value.push(newProject);
      }

      const removeSkill = (skill) => {
        skills.value.splice(skills.value.indexOf(skill), 1);
      }

      const addSkill = (skill) => {
        skills.value.push(skill);
      }

    const defineError = (resume) => {
      const hasMissingData = (item) => {
        if (!item.school) {
          return "School input is missing";
        } else if (!item.degreeType) {
          return "Degree type input is missing";
        } else if (!item.specialization) {
          return "Specialization input is missing";
        } else if (!item.start) {
          return "Start date input is missing";
        } else if (!item.end) {
          return "End date input is missing";
        }
        return false;
      };

      if (resume.educations.some(hasMissingData)) {
        return "Education information is incomplete";
      }

      if (resume.workExperiences.some(hasMissingData)) {
        return "Work experience information is incomplete";
      }

      if (resume.projects.some(hasMissingData)) {
        return "Project information is incomplete";
      }

      return "";
    };
  
      return {
        skills,
        educations,
        workExperiences,
        projects,
        errorMsg,
        removeSkill,
        addSkill,
        removeEducation,
        addEducation,
        removeWorkExperience,
        addWorkExperience,
        removeProject,
        addProject,
        saveResume,
      };
    },
  
  }
  </script>