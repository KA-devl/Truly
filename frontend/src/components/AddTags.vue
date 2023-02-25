<template>

            <div class="sm:col-span-2">
                
    <div class="flex">
        <div class="relative w-full">
            <input name="jobtitle" autocomplete="off" v-model="tagText"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-500 rounded outline-none transition duration-100 px-3 py-2" />
            <button @click="add()" 
            class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Add
            </button>
        </div>
    </div>
            </div>

   

    <div class='my-3 flex flex-wrap -m-1'>
      <div v-for="tag in tags">
        <Tag :text="tag" :handleRemove="handleRemove" />
      </div>
</div>
</template>

<script>
import { ref } from 'vue';
import Tag from './Tag.vue';

export default {
    props: ["tags", "handleRemove", "handleAdd"],
    components: {
        Tag,
    },
    setup(props) {
        const tagText = ref('');

        const add = () => {
            if (tagText.value)
            {
                props.handleAdd(tagText.value)
                tagText.value = '';
            }
            
        }

        return {
            tagText,
            add
        }
    }
}
</script>