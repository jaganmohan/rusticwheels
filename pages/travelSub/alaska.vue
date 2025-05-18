<template>
  <div class="min-h-screen" @click.right.prevent="true">
    <div class="grid place-items-center justify-items-center">

      <div class="grid place-items-center text-white text-xl lg:text-3xl bg-[#322] pt-10 pb-10 w-full xl:w-5/6">
        <p>High in the mountains of Alaska</p>
      </div>

      <div class="grid grid-flow-row gap-y-10 p-5 lg:p-15 w-full xl:w-5/6 place-content-center bg-neutral-200">
        <div class="grid place-items-center">
          <section class="min-h-1/2 w-full object-contain">
            <img src="https://storage.googleapis.com/rusticwheels/802.jpg" class="object-cover rounded-sm h-full w-full"/>
          </section>
          <section class="place-items-center">
            <p class="place-content-center p-5 text-base/7 xl:p-20 xl:text-2xl/12" text-center>
              I'm now less than a week away from setting out from Vancouver to restart my long journey south back down to Patagonia, where my bicycle crossing of the Americas was interrupted by Covid back in 2020. 
              The journey this year is going to be quite different for a number of reasons, and I've put together a short video running through the details of my plans for this year. 
              Check out the video below, which also includes some really beautiful footage from the two weeks I've already spent bikepacking around British Columbia over the last month. 
              I hope you enjoy it!
            </p>
          </section>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr]">

          <section>
            <img src="https://storage.googleapis.com/rusticwheels/802.jpg" class="object-cover rounded-sm h-full w-full"/>
          </section>
          <section>
            <p class="place-content-center p-5 text-small/7 xl:p-10 xl:text-base/10 text-center">
              I'm now less than a week away from setting out from Vancouver to restart my long journey south back down to Patagonia, where my bicycle crossing of the Americas was interrupted by Covid back in 2020. 
              The journey this year is going to be quite different for a number of reasons, and I've put together a short video running through the details of my plans for this year. 
            </p>
          </section>
          <section>
            <img src="https://storage.googleapis.com/rusticwheels/802.jpg" class="object-cover rounded-sm h-full w-full"/>
          </section>
        </div>

      </div>
    
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>