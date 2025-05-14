<template>
  <div class="min-h-screen" @click.right.prevent="true">
  <div class="grid place-items-center justify-items-center">

    <div class="grid place-items-center text-white text-xl lg:text-3xl bg-[#322] pt-10 pb-10 w-full md:w-5/6">
        <p>Travel</p>
    </div>
    <div class="grid grid-flow-row gap-y-10 p-5 lg:p-15 w-full md:w-5/6 place-content-center bg-neutral-200">

      <a href="/travelSub/alaska">
      <div class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] shadow-sm hover:shadow-2xl rounded-lg bg-neutral-100">

        <div class="place-content-center m-2">
          <img src="https://storage.googleapis.com/rusticwheels_website_test/802.jpg" class="object-cover rounded-sm hover:shadow-xl min-w-full min-h-full"/>
        </div>
        <div class="place-content-center m-2 lg:pl-10">
          <div class="grid grid-flow-row md:grid-rows-[1fr_3fr_1fr] min-w-full min-h-full">
            <p class="text-xl lg:text-3xl place-content-center">High up in the mountains of Alaska</p>
            <p class="text-neutral-700 pt-5 text-xs md:text-lg">
              I have been travelling in Alaska for last couple of months.
            </p>
            <p class="text-xs place-content-center text-neutral-500">USA | Alaska | 2021</p>
          </div>
        </div>

      </div>
      </a>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] shadow-sm hover:shadow-2xl rounded-lg bg-neutral-100">

        <div class="place-content-center m-2">
          <img src="https://storage.googleapis.com/rusticwheels_website_test/842.jpg" class="object-cover rounded-sm hover:shadow-xl min-w-full min-h-full"/>
        </div>
        <div class="place-content-center m-2 lg:pl-10">
          <div class="grid grid-flow-row md:grid-rows-[1fr_3fr_1fr] min-w-full min-h-full">
            <p class="text-xl lg:text-3xl place-content-center">Berries all over the place</p>
            <p class="text-neutral-700 pt-5 text-xs md:text-lg">
              I have been travelling in Alaska for last couple of months.
              The above syntax means the presence of the active class will be determined by the truthiness of the data property 
            </p>
            <p class="text-xs place-content-center text-neutral-500">Mexico | Oxaca | 2021</p>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] shadow-sm hover:shadow-2xl rounded-lg bg-neutral-100">

        <div class="place-content-center m-2">
          <img src="https://storage.googleapis.com/rusticwheels_website_test/871.jpg" class="object-cover rounded-sm hover:shadow-xl min-w-full min-h-full"/>
        </div>
        <div class="place-content-center m-2 lg:pl-10">
          <div class="grid grid-flow-row md:grid-rows-[1fr_3fr_1fr] min-w-full min-h-full">
            <p class="text-xl lg:text-3xl place-content-center">Hiking in Hawaii</p>
            <p class="text-neutral-700 pt-5 text-xs md:text-base">
              I have been travelling in Alaska for last couple of months.
            </p>
            <p class="text-xs place-content-center text-neutral-500">India | Andhra Pradesh | 2022</p>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] shadow-sm hover:shadow-2xl rounded-lg bg-neutral-100">

        <div class="place-content-center m-2">
          <img src="https://storage.googleapis.com/rusticwheels_website_test/HawaiiSunset1.jpg" class="object-cover rounded-sm hover:shadow-xl min-w-full min-h-full"/>
        </div>
        <div class="place-content-center m-2 lg:pl-10">
          <div class="grid grid-flow-row md:grid-rows-[1fr_3fr_1fr] min-w-full min-h-full">
            <p class="text-xl lg:text-3xl place-content-center">Landscapes of Moon</p>
            <p class="text-neutral-700 pt-5 text-xs md:text-base">
              I have been travelling in Alaska for last couple of months.
              The above syntax means the presence of the active class will be determined by the truthiness of the data property 
            </p>
            <p class="text-xs place-content-center text-neutral-500">Footer</p>
          </div>
        </div>

      </div>
    
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>