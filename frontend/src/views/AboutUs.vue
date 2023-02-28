<template>
    <div>
    <Navbar />
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">At Truly, we're committed to making the job search and hiring process as efficient and effective as possible. We're constantly innovating and improving our platform to ensure that job seekers and employers have access to the best possible tools and resources. Thank you for choosing Truly, and we look forward to helping you achieve your career goals.</p>
    </div>
    <!-- text - end -->

    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://avatars.githubusercontent.com/u/83729449?v=4" loading="lazy" alt="Photo 1" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Anes Khadiri</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/275988944_4714309678696051_2534520497335545699_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WerupCoeIOMAX-zcHvh&_nc_ht=scontent-lga3-2.xx&oh=00_AfAh4JAOuct_MXNpUW9jdoyg6M9WAZsoBhWGu4chCvrqdg&oe=6402B0FE" loading="lazy" alt="Photo 2" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Mickelson Benjamin</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://media.licdn.com/dms/image/C5603AQHUFwmIgrrZUw/profile-displayphoto-shrink_800_800/0/1657505492459?e=1683158400&v=beta&t=qPf2ajOR1bR4usLljuF_44pgykJxdSoWtoWamKKHaWE" loading="lazy" alt="Photo 3" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Anas Senouci</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/278842338_2324349551050649_9132764376241351868_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3yrTuwmKgecAX8W8PG9&_nc_ht=scontent-lga3-2.xx&oh=00_AfATP8C4M3g1M6y5hPhH-b5zJH2MRmYQRM1kBZgD9O3Gyg&oe=64033392" loading="lazy" alt="Photo 4" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Zaheer Quraishi</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://media.licdn.com/dms/image/C4D03AQGFAaOqSI53DA/profile-displayphoto-shrink_800_800/0/1648414884406?e=1683158400&v=beta&t=cRi4gYDBizIoVByPDNkcVJqtsEuEU9fznTWSpDSPZO0" loading="lazy" alt="Photo 5" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Hugo Morin</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="https://media.licdn.com/dms/image/C4E03AQF_lbpttZH1qQ/profile-displayphoto-shrink_800_800/0/1651779884863?e=1683158400&v=beta&t=RAEUyMzyCrx0SSNvBBm8swxU6a1YL6VURiDFJLC4GMY" loading="lazy" alt="Photo 6" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Nicholas Piperni</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src="" loading="lazy" alt="Photo 7" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">Arjun Gautam</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Developer</p>

          <!-- social - start -->
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- social - end -->
        </div>
      </div>
      <!-- person - end -->

      <!-- person - end -->
    </div>
  </div>
</div>
<!--Testimonials - start-->
<div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2
              class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12"
            >
              What others say about us
            </h2>

            <div class="grid md:grid-cols-2 gap-4 md:gap-8">
              <!-- quote - start -->
              <div
                class="flex flex-col items-center bg-blue-500 rounded-lg gap-4 md:gap-6 px-8 py-6"
              >
                <div class="max-w-md text-white lg:text-lg text-center">
                  “Truly provided me with resources and tools that helped me to
                  optimize my resume and cover letter. Thanks to this platform, I
                  was able to secure a job within a few weeks of using it. I would
                  highly recommend it to anyone looking for job opportunities.”
                </div>

                <div
                  class="flex flex-col sm:flex-row items-center gap-2 md:gap-3"
                >
                  <div
                    class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-blue-100 rounded-full overflow-hidden"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/690784181373894706/1076006542886846555/image.png"
                      loading="lazy"
                      alt="Photo by Radu Florin"
                      class="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div
                      class="text-blue-50 text-sm md:text-base font-bold text-center sm:text-left"
                    >
                      Dann K.
                    </div>
                    <p
                      class="text-blue-200 text-sm md:text-sm text-center sm:text-left"
                    >
                      Game Developer / Blizzard Entertainment
                    </p>
                  </div>
                </div>
              </div>
              <!-- quote - end -->

              <!-- quote - start -->
              <div
                class="flex flex-col items-center bg-blue-500 rounded-lg gap-4 md:gap-6 px-8 py-6"
              >
                <div class="max-w-md text-white lg:text-lg text-center">
                  “I've used a lot of job search websites over the years, but
                  Truly stands out as the best. The user interface is intuitive
                  and easy to use, and there are always a wide variety of job
                  postings available. I found my current job through this portal
                  and couldn't be happier.”
                </div>

                <div
                  class="flex flex-col sm:flex-row items-center gap-2 md:gap-3"
                >
                  <div
                    class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-blue-100 rounded-full overflow-hidden"
                  >
                    <img
                      src="https://media.licdn.com/dms/image/C4D22AQH3TF4CVead9g/feedshare-shrink_1280/0/1666977589847?e=1679529600&v=beta&t=shB5QJr6q-JKqkB1RuGh61iepita5thXs2Yb_yY2pI8"
                      loading="lazy"
                      alt="Photo by christian ferrer"
                      class="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div
                      class="text-blue-50 text-sm md:text-base font-bold text-center sm:text-left"
                    >
                      Garvit B.
                    </div>
                    <p
                      class="text-blue-200 text-sm md:text-sm text-center sm:text-left"
                    >
                      Junior Analyst / Lehman Brothers
                    </p>
                  </div>
                </div>
              </div>
              <!-- quote - end -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>