<template>
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="sm:col-span-2">
        <label for="school" class="inline-block text-gray-800 text-sm sm:text-base mb-2">School*</label>
        <input name="school" autocomplete="off" @input="editEducationInfo($event)" :value="education.school"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    <br />
    <div class="sm:col-span-2">
        <label for="degreeType" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Degree Type*</label>
        <select @input="editEducationInfo($event)" name="degreeType" :value="education.degreeType"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2">
                  <option selected disabled value="">Choose a degree type</option>
                  <option value="high-scool">High School</option>
                  <option value="cegep">CEGEP</option>
                  <option value="associate">Associate</option>
                  <option value="professional">Professional</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="master">Master's</option>
                  <option value="doctoral">Doctoral</option>
                </select>
    </div>
    <br />
    <div class="sm:col-span-2">
        <label for="specialization" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Specialization*</label>
        <input name="specialization" autocomplete="off" @input="editEducationInfo($event)" :value="education.specialization"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    <br />
    <div class="sm:col-span-2">
        <label for="grade" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Grade</label>
        <input name="grade" autocomplete="off" @input="editEducationInfo($event)" :value="education.grade"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
    </div>

    <br />
    <div class="sm:col-span-2">
        <label for="start" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Start Date*</label>
        <input type="month" name="start" @input="editEducationInfo($event)" :value="education.start"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2">
        <label for="end" class="inline-block text-gray-800 text-sm sm:text-base mb-2">End Date*</label>
        <input type="month" name="end" @input="editEducationInfo($event)" :value="education.end"
        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <br />
      <div class="sm:col-span-2 flex justify-between items-center">
                
                <button @click="removeEducation(education)"
                  class="inline-block bg-red-200 hover:bg-red-300 active:bg-red-400 focus-visible:ring ring-indigo-300 text-black text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-5 py-2">
                  Remove Education
                </button>
  
                <span class="text-gray-500 text-sm"></span>
              </div>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["education", "removeEducation"],
    setup(props) {

        const remove = () => {
        }
        
        const editEducationInfo = (event) => {
            
            let temp = props.education
            temp[event.target.name] = event.target.value


            //console.log(props.education[event.target.name]);
            //console.log(event.target.value);
        }

        return {
            remove,
            editEducationInfo,
        }
    }
}
</script>