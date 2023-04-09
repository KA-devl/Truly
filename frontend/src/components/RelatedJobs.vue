<template>
  <!-- Related jobs -->
  <div class="mb-8">
    <h4 class="text-2xl font-bold font-inter mb-8">
      Related Jobs
    </h4>
    <!-- List container -->
    <div v-for="job in shuffledArray" class="flex flex-col border-t border-gray-200">
      <!-- Item -->
      <div class="[&:nth-child(-n+12)]:-order-1 border-b border-gray-200 group">
        <div class="px-4 py-6">
          <div class="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <div class="shrink-0">
              <img
                :src="job.authorId.avatar.imageUrl"
                width="56" height="56" alt="Company 02" />
            </div>
            <div class="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
              <div>
                <div class="flex items-start space-x-2">
                  <div class="text-sm text-gray-800 font-semibold mb-1">
                    {{ job.authorId.name }}
                  </div>
                </div>
                <div class="mb-2">
                  <a class="text-lg text-gray-800 font-bold" href="job-post.html"> {{ job.name }}</a>
                </div>
                <div class="-m-1">
                  <a class="text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 bg-gray-100 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out"
                    href="#0"> {{ formatDate(job.creationDate) }}</a>
                  <a class="text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 bg-gray-100 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out"
                    href="#0">{{ job.jobStatus[0] }}</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import { DateTime } from 'luxon';

export default {
  props: ["JobList"],
  setup(props) {
    const formatDate = (unformattedDate) => {
            const date = DateTime.fromISO(unformattedDate);
            return date.toLocaleString(DateTime.DATETIME_MED);
        };
    const shuffledArray = computed(() => {
      const shuffled = [...props.JobList].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, 3);
    })

    return { shuffledArray, formatDate }
  }


}


</script>