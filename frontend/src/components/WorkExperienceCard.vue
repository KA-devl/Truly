<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div class="sm:col-span-2">
            <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company or Organization*</label>
            <input name="company" autocomplete="off" @input="editWorkInfo($event)" :value="work.company"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <br />
        <div class="sm:col-span-2">
            <label for="jobtitle" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Title*</label>
            <input name="jobtitle" autocomplete="off" @input="editWorkInfo($event)" :value="work.jobtitle"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <br />
        <div class="sm:col-span-2">
            <label for="location" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Location*</label>
            <input name="location" autocomplete="off" @input="editWorkInfo($event)" :value="work.location"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <br />
        <div class="sm:col-span-2">
                <label for="jobtype" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Job Type*</label>
                <select name="jobtype" @input="editWorkInfo($event)" :value="work.jobtype"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                  <option selected disabled value="">Choose a job type</option>
                  <option value="contractual">Contractual</option>
                  <option value="permanent">Permanent</option>
                  <option value="temporary">Temporary</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>
        <br />
        <div class="sm:col-span-2">
        <label for="start" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Start Date*</label>
        <input type="month" name="start" @input="editWorkInfo($event)" :value="work.start"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2">
        <label for="end" class="inline-block text-gray-800 text-sm sm:text-base mb-2">End Date*</label>
        <span class="text-sm font-normal text-gray-600 dark:text-gray-400"> (Leave Empty if you are currently working there)</span>
        <input type="month" name="end" @input="editWorkInfo($event)" :value="work.end"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2">
            <label for="location" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Core Competencies</label>
            <AddTags :tags="work.competencies" :handleRemove="removeCompetency" :handleAdd="addCompetency"/>
        </div>
        <br />
      <div class="sm:col-span-2">
              <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Additional Information</label>
              <textarea name="message" @input="editWorkInfo($event)" :value="work.message"
                class="w-full h-24 bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>
      <br />
        <br />
          <div class="sm:col-span-2 flex justify-between items-center">
                    
                    <button @click="remove(work)"
                      class="inline-block bg-red-200 hover:bg-red-300 active:bg-red-400 focus-visible:ring ring-indigo-300 text-black text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                      Remove Work Experience
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
        props: ["work", "remove"],
        setup(props) {
            
            const editWorkInfo = (event) => {
            
                let temp = props.work
                temp[event.target.name] = event.target.value
            }

            const addCompetency = (competency) => {
                props.work.competencies.push(competency);
            }

            const removeCompetency = (competency) => {
                props.work.competencies.splice(props.work.competencies.indexOf(competency), 1)
            }

            return {
                editWorkInfo,
                addCompetency,
                removeCompetency,
            }
           
        }
    }
    </script>