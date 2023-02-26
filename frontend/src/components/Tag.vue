<template>
    
    <span @click="handleRemove(text)"
        class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-blue-200 hover:bg-blue-900 dark:bg-blue-300 dark:hover:bg-blue-500 rounded px-4 py-2 leading-loose cursor-pointer dark:text-black-900">
        {{ text }}
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 sm:h-4 sm:w-4 ml-4 text-gray-900 hover:text-black-600 dark:text-black-700 dark:hover:text-black-700"
          viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </span>
</template>

<script>


export default 
{
    props: ["text", "handleRemove"],
    setup() {
    }
}
</script>