<script setup></script>

<template>
  <main
    class="lg:col-span-2 flex flex-col h-[90dvh] items-center justify-center lg:h-[100dvh]"
  >
    <div
      id="loginBox"
      class="flex flex-col items-center bg-gray-300 gap-5 py-[clamp(0rem,5dvh,2.5rem)] px-[min(3%,2.5rem)] rounded-2xl shadow-2xl"
    >
      <h1 class="text-7xl font-bold">Login</h1>

      <div class="flex flex-col items-center gap-5 mt-5">
        <div
          class="grid grid-cols-[90px_1fr_1fr] grid-rows-1 items-center w-[clamp(19rem,60vw,20rem)]"
        >
          <h3 class="w-[70px] font-medium">Username:</h3>
          <input type="text" class="col-span-2 bg-white h-8 w-[95%]" />
        </div>

        <div
          class="grid grid-cols-[90px_1fr_1fr] items-center w-[clamp(19rem,60vw,20rem)]"
        >
          <h3 class="w-[70px] font-medium">Password:</h3>
          <input type="password" class="col-span-2 bg-white h-8 w-[95%]" />
        </div>
      </div>

      <button
        class="bg-white text-[20px] font-medium py-2 px-4 rounded-xl hover:bg-gray-100"
      >
        Continue
      </button>

      <a href="" class="text-[13px] text-blue-800 hover:text-blue-500">Forgot Password?</a>

      <div class="flex flex-row gap-1 items-center">
        <h6 class="text-[14px]">Visiting for the first time?</h6>
        <a href="" class="text-[14px] text-blue-800 hover:text-blue-500">Signup now</a>
      </div>
    </div>
  </main>
</template>
