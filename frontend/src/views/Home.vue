<template>
  <!-- THE HOME PAGE OF THE WHOLE WEBSITE-->
  <Navbar />
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <section class="relative flex flex-col">
        <div
          class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8"
        >
          <img
            src="https://thisisbien.com/wp-content/uploads/2021/10/InMoDe_Why_Cover.png"
            loading="lazy"
            alt="Illustration by Carlos Alegria"
            class="w-auto h-auto object-cover object-center"
          />
        </div>

        <h1 class="text-center my-2 text-3xl px-2 mb-4 font-bold">
          <span class="text-blue-600">Jobs</span> and
          <span class="text-blue-600">talents </span> you wont find anywhere
          else.
        </h1>
      </section>

      <!-- find - a - job - start -->
      <section class="flex flex-col pb-12 pl-4 justify-center">
        <div class="flex flex-col lg:flex-row mx-4 pt-12 justify-center gap-4">
          <div class="flex relative w-full lg:w-1/4">
            <span
              type="submit"
              class="font-semibold absolute left-1 top-3 ml-2 text-black"
            >
              What
            </span>
            <input
              class="border-2 border-blue-400 bg-red transition h-12 px-5 pl-16 pr-16 rounded-md focus:outline-none w-full text-black text-lg"
              type="search"
              name="search"
              placeholder="Search jobs, keywords, or companies"
            />
            <button type="submit" class="absolute right-2 top-3 mr-4">
              <svg
                version="1.1"
                class="text-blue-400 h-6 w-6 fill-current"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 53.627 53.627"
                style="enable-background: new 0 0 53.627 53.627"
                xml:space="preserve"
              >
                <path
                  d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
                c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
                S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
                l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"
                />
              </svg>
            </button>
          </div>

          <div class="flex relative w-full items-center lg:w-1/4">
            <span
              type="submit"
              class="font-semibold absolute left-1 top-3 ml-2 text-black"
            >
              Where
            </span>
            <input
              class="border-2 border-blue-400 bg-red transition h-12 px-5 pr-16 pl-16 rounded-md focus:outline-none w-full text-black text-lg"
              type="search"
              name="search"
              placeholder="City, province or remote"
            />
            <button type="submit" class="absolute right-2 top-3 mr-4">
              <svg
                class="text-blue-400 h-6 w-6 fill-current"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 368.666 368.666"
                style="enable-background: new 0 0 368.666 368.666"
                xml:space="preserve"
              >
                <g id="XMLID_2_">
                  <g>
                    <g>
                      <path
                        d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515
                    c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51
                    c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355
                    c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552
                    c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297
                    C313.629,178.709,304.004,206.393,285.795,229.355z"
                      />
                      <path
                        d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374
                    S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374
                    s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <button
            class="bg-blue-500 text-white px-2 rounded-lg hover:bg-blue-600 py-2"
          >
            Find jobs
          </button>
        </div>
        <p class="text-center mt-6">
          <a class="font-semibold text-blue-500 hover:underline cursor-pointer"
            >Upload your Resume
          </a>
          - Get noticed by top employers!
        </p>
        <p class="text-center mt-6">
          <a class="font-semibold text-blue-500 hover:underline cursor-pointer"
            >Post a job on Truly
          </a>
        </p>
      </section>
      <!--find - a - job - end -->
      <!--Content - start-->
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1
            class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            Our competitive advantage
          </h1>

          <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
            Welcome to Truly, a leading job search platform dedicated to
            connecting job seekers with employers and helping individuals find
            their dream jobs. At Truly, we believe that finding a job should be
            simple, stress-free, and accessible to everyone. We're committed to
            helping job seekers of all backgrounds and experience levels find
            meaningful work and connect with employers who value their unique
            skills and talents.<br /><br />

            Our platform offers a range of powerful features and tools to help
            job seekers stand out from the crowd and connect with potential
            employers, including a user-friendly job search interface,
            personalized job alerts, resume and cover letter builders, and
            expert career advice. <br /><br />

            For employers, Truly provides a seamless and efficient way to find
            top talent and connect with job seekers from diverse backgrounds.
            Our platform offers a suite of innovative recruitment tools and
            features, including job postings, applicant tracking, and candidate
            matching, designed to help employers find the right fit for their
            team. <br /><br />
          </p>

          <h2
            class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4"
          >
            About us
          </h2>

          <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
            At Truly, we're committed to making the job search and hiring
            process as efficient and effective as possible. We're constantly
            innovating and improving our platform to ensure that job seekers and
            employers have access to the best possible tools and resources.
            Thank you for choosing Truly, and we look forward to helping you
            achieve your career goals.
          </p>
          <blockquote
            class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8"
          >
            “I was struggling to find job opportunities in my field, but then I
            came across Truly and it was a game-changer for me. The platform's
            user-friendly interface allowed me to easily search for relevant job
            postings and apply with just a few clicks. I landed a great job
            within a few weeks of using this platform. Highly recommend it!” -
            John D.
          </blockquote>

          <div
            class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8"
          >
            <img
              src="https://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <!--Content - end-->

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2
              class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
            >
              Features
            </h2>

            <p
              class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"
            >
              Here are a few of the many useful features Truly has to offer:
            </p>
          </div>
          <!-- text - end -->

          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Advanced search filters
                </h3>
                <p class="text-gray-500">
                  Truly offers advanced search filters that allow job seekers to
                  refine their search even further, including filtering by
                  salary, job type, company size, and more.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Resume/CV builder
                </h3>
                <p class="text-gray-500">
                  Truly's resume/CV builder allows job seekers to create a
                  professional-looking resume or CV that can be easily uploaded
                  to the job search portal or sent to potential employers.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Job alerts
                </h3>
                <p class="text-gray-500">
                  Truly allows job seekers to receive notifications when new job
                  postings matching their search criteria are added to the
                  platform.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Application tracking
                </h3>
                <p class="text-gray-500">
                  Truly provides job seekers with the ability to track the
                  status of their job applications, including whether their
                  application has been viewed by the employer and the current
                  status of their application.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Salary data
                </h3>
                <p class="text-gray-500">
                  Truly provides salary data for different job titles and
                  industries, helping job seekers to better understand the
                  compensation landscape.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 md:w-8 h-6 md:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Career advice
                </h3>
                <p class="text-gray-500">
                  Truly provides career advice articles, webinars, and resources
                  to help job seekers navigate the job search process and
                  improve their chances of landing their dream job.
                </p>
              </div>
            </div>
            <!-- feature - end -->
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
      <!--Testimonials - end-->
      <!--Footer - start-->
      <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div
            class="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6"
          >
            <!-- nav - start -->
            <nav
              class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6"
            >
              <a
                href="#"
                class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >About</a
              >
              <a
                href="#"
                class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >Investor Relations</a
              >
              <a
                href="#"
                class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >Jobs</a
              >
              <a
                href="#"
                class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >Press</a
              >
              <a
                href="#"
                class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >Blog</a
              >
            </nav>
            <!-- nav - end -->

            <!-- social - start -->
            <div class="flex gap-4">
              <a
                href="#"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  class="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  class="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  class="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  class="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
            <!-- social - end -->
          </div>

          <div class="text-gray-400 text-sm text-center py-8">
            © 2023 - Present Truly. All rights reserved.
          </div>
        </footer>
      </div>
      <!--Footer - end-->
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

<style></style>
