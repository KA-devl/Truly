<template>
  <!-- NavBar -->

  <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  <!-- Signup container -->
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    <!-- form -->
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-3xl text-blue-500">Register</h2>

      <form action="" class="flex flex-col gap-4">
        <input class="p-2 mt-8 rounded-xl border" type="First Name" name="First Name" placeholder="First Name">
        <input class="p-2 rounded-xl border" type="Last Name" name="Last Name" placeholder="Last Name">
        <input class="p-2 rounded-xl border" type="email" name="email" placeholder="Email">
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="Confirm Password" name="Confirm Password" placeholder="Confirm Password">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button class="bg-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
      </form>


      <div class="mt-5 text-xs border-b border-blue-500 py-4 text-blue-500">
      </div>

      <div class="mt-3 text-xs flex justify-between items-center text-blue-500">
        <p>Already have an account?</p>
        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Log in</button>
      </div>
    </div>

    <!-- image -->
    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    </div>
  </div>
</section>

</template>
