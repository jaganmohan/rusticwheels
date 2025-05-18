<template>
  <NavigationMenuRoot v-model="currentTrigger"  class="fixed z-[1] flex-auto w-full shadow-md grid grid-flow-col bg-stone-200 h-15 content-center">
    <NavigationMenuList class="m-0 flex w-full list-none p-1 text-lg">

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-sky-700 hover:text-stone-900 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-lg font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/">RusticWheels</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:text-sky-900 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-lg font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/travel">Travel</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:text-sky-900 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-lg font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/messages">Messages</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:text-sky-900 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-lg font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/stories">Stories</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:text-sky-900 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-lg font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/gear">Gear</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>

    <NavigationMenuList class="m-0 flex list-none p-1 justify-end">

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://instagram.com/jaganspace"
        >
          <Icon name="skill-icons:instagram"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-md font-large leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://youtube.com/@jaganspace"
        >
          <Icon name="logos:youtube-icon"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://linkedin.com/in/jaganmohan-m"
        >
          <Icon name="logos:linkedin-icon"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] px-3 py-2 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://github.com/jaganmohan"
        >
          <Icon name="logos:github-icon"/>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>

  </NavigationMenuRoot>

  <div class="h-15 relative bg-white"></div>

  <NuxtPage />

  <footer>
        <p style="margin:auto">© 2025 All rights reserved by Jaganmohan M.</p>
  </footer>

</template>


<script setup lang="ts">

import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'

const currentTrigger = ref('')

</script>

<style>

@import "tailwindcss";

footer {
    height:100px;
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #322;
    color: #ffffff;
}

html{
    scroll-behavior: smooth;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: scroll;
  background-color: #111;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: scroll;
}

a:any-link, a:focus {
    outline: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>