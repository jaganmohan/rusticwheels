<template>
  <div class="min-h-screen">
    <div class="h-auto w-full" >

      <section id="section1" class="w-full h-screen full-view-img-background">
        <div id="section1-figure">
          <h1 class="text-5xl sm:text-6xl md:text-9xl text-shadow-lg">Hello!</h1>
          <h1 class="text-2xl sm:text-3xl  md:text-6xl text-shadow-lg p-10">Welcome to RusticWheels</h1>
        </div>
      </section>

      <section id="section2" class="w-full min-h-screen bg-neutral-100 place-items-center flex justify-center">
        <div class="grid grid-cols-1 xl:grid-cols-[1fr_1fr] w-9/10 xl:w-4/5 2xl:w-3/5 place-items-center">
          
          <div class="p-5">
            <img src="https://storage.googleapis.com/rusticwheels/IMG_4459LQ2.jpeg" class="object-cover min-w-full min-h-full"/>
          </div>

          <div class="grid grid-rows-flow gap-y-5 text-neutral-700 p-5 xl:p-10 text-xs md:text-sm xl:text-lg">
            <p class="text-base md:text-xl">My name is Jaganmohan a.k.a J.</p>
            <p>I quit my job in the summer of 2025 as a full-time software engineer to explore the world on my bike RusticWheels.</p>
            <p>The first time I went hiking in India is when I discovered my connection with nature.
              It could have been due to just how I grew up as a child mostly running around in grass fields, swimming in local ponds and walking in suburban woods.
              Or it could have been the feeling of freedom, since as a child I never visited many places except a yearly trip to my grandma's under tight supervision of my parents.
            </p>
            <p>
              After moving to the United States to pursue my Masters, I had more opportunities of hiking in the vast national forests and travelling to other countries.
              One trip which actually solidified my connection with nature and our planet, is a thru-hike in Alaska in Denali National Park and Chugach National Forest.
            </p>
            <p>
              That's when I decided I am going to explore the entire world and experience our planet, not just for people and culture, but also for the geography, flora and fauna.
            </p>
          </div>
          
        </div>
      </section>

      <section id="section3" class="w-full min-h-200 max-h-screen full-view-img-background grid place-items-center">
        <div class="absolute w-2/3 sm:w-2/5 h-3/5 xl:w-130 xl:h-150 2xl:m-2/8 2xl:left-4/7 bg-neutral-100 place-content-center">
          <p class="text-sm/7 md:text-base/10 xl:text-2xl/12 justify-center pl-5 pr-5 md:pl-10 md:pr-10 tracking-wide text-center">
              I feel as a human, it is necessary to explore the world on our own for some part of our lives, 
              to comprehend the value of food, resources, relationships, privileges and Life, 
              which we have taken for granted living in our comfortable bubbles.
          </p>
        </div>
      </section>

      <section id="section4" class="w-full min-h-screen grid place-items-center bg-neutral-100">
        <div class="w-9/10 h-9/10">
          <iframe src="https://www.google.com/maps/d/embed?mid=1RK8GiBA6Z-b5KDRqc7pjxiznUR2MfNQ&ehbc=2E312F" class="w-full h-full"></iframe>
        </div>
      </section>

      <section id="section5" class="w-full h-screen full-view-img-background">
        <div id="section5-figure">
          <h1 class="text-6xl text-shadow-lg">Best Regards!</h1>
        </div>
      </section>

    </div>
  </div>
</template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style>
  .full-view-img-background{
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100vh; 
    width: 100%;
    position: relative;
    margin: auto;
  }

  #section1{
    background-image: url('https://storage.googleapis.com/rusticwheels/IcefieldParkway_1_small.jpeg');
    mask-image: linear-gradient(black 70%, transparent 100%);
  }

  #section3{
    background-image: url('https://storage.googleapis.com/rusticwheels/802.jpg');
  }

    #section5{
    background-image: url('https://storage.googleapis.com/rusticwheels/Junction37_3_small.jpeg');
    mask-image: linear-gradient(black 70%, transparent 100%);
  }

  #sectionN{
    background-image: url('https://storage.googleapis.com/rusticwheels/842.jpg');
  }

  #section1-figure{
    text-align: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: whitesmoke;
    z-index: 10;
  }

  #section5-figure{
    text-align: center;
    position: absolute;
    top: 35%;
    left: 53%;
    transform: translate(-50%, -50%);
    color: whitesmoke;
    z-index: 10;
  }

  </style>