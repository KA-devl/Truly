<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div class="sm:col-span-2">
            <label for="title" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Project Title*</label>
            <input name="title" autocomplete="off" @input="editProjectInfo($event)" :value="project.title"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <br />
        <div class="sm:col-span-2">
            <label for="role" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Role*</label>
            <input name="role" autocomplete="off" @input="editProjectInfo($event)" :value="project.role"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <br />
        <div class="sm:col-span-2">
        <label for="start" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Start Date*</label>
        <input type="month" name="start" @input="editProjectInfo($event)" :value="project.start"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2">
        <label for="end" class="inline-block text-gray-800 text-sm sm:text-base mb-2">End Date*</label>
        <span class="text-sm font-normal text-gray-600 dark:text-gray-400"> (Leave empty if not finished)</span>
        <input type="month" name="end" @input="editProjectInfo($event)" :value="project.end"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2">
            <label for="location" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Core Competencies</label>
            <AddTags :tags="project.competencies" :handleRemove="removeCompetency" :handleAdd="addCompetency"/>
        </div>
        <br />
      <div class="sm:col-span-2">
              <label for="description" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Description*</label>
              <textarea name="description" @input="editProjectInfo($event)" :value="project.description"
                class="w-full h-24 bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>
      <br />
        <br />
          <div class="sm:col-span-2 flex justify-between items-center">
                    
                    <button @click="remove(project)"
                      class="inline-block bg-red-200 hover:bg-red-300 active:bg-red-400 focus-visible:ring ring-indigo-300 text-black text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                      Remove Project
                    </button>
      
                    <span class="text-gray-500 text-sm"></span>
                  </div>
        </div>
        
    </template>
    
    <script>
    import { ref } from 'vue';
    import AddTags from './AddTags.vue';
    
    export default {
        components: {
            AddTags
        },
        props: ["project", "remove"],
        setup(props) {
            
            const editProjectInfo = (event) => {
            
                let temp = props.project
                temp[event.target.name] = event.target.value
            }

            const addCompetency = (competency) => {
                props.project.competencies.push(competency);
            }

            const removeCompetency = (competency) => {
                props.project.competencies.splice(props.project.competencies.indexOf(competency), 1)
            }

            return {
                editProjectInfo,
                addCompetency,
                removeCompetency,
            }
           
        }
    }
    </script>