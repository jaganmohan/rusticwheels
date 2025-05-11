<template>
  <div class="min-h-screen">
    <div id="scrollviewparent">
      <div style="height: auto; width: auto; ">
        <section id="section1" class="scrollviewsection full-view-img-background">
          <figure class="section-figure">
            <h1 class="text-lg">Hello!</h1>
          </figure>
        </section>
      </div>
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
    background-image: url('https://storage.googleapis.com/rusticwheels_website_test/802.jpg');
  }

  #section2{
    background-image: url('https://storage.googleapis.com/rusticwheels_website_test/871.jpg');
  }

  #section3{
    background-image: url('https://storage.googleapis.com/rusticwheels_website_test/DSC00718.jpg');
  }

  #section4{
    background-image: url('https://storage.googleapis.com/rusticwheels_website_test/842.jpg');
  }

  .section-figure{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 10;
  }

  .overlay-dark{
    background-color: black;
    opacity: 0.3;
    position: relative; 
    height: inherit; 
    width: auto; 
    z-index:1;
    border-radius: 20px;
  }

  .overlay-dark-gradient{
    background:linear-gradient(to bottom, transparent 60%, black 100%);
  }
  </style>