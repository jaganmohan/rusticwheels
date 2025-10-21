<template>
  
  <NavigationMenuRoot v-model="currentTrigger" class="z-[1] flex-auto w-full shadow-md grid grid-flow-col bg-white h-15 content-center justify-items-center">
    <NavigationMenuList class="m-0 flex w-full list-none p-1 gap-3 md:gap-5 items-baseline">

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-sky-700 focus:shadow-1g block select-none rounded-[4px] text-3xl font-semibold leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/">RusticWheels</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem class="hidden sm:block">
        <NavigationMenuLink
          class="text-grass11 hover:text-sky-700 focus:shadow-1g block select-none rounded-[4px] text-2xl font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] hover:underline hover:underline-offset-8"
        >
          <NuxtLink to="/travel">Travel</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] md:p-1 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://instagram.com/rustic_wheels"
        >
          <Icon name="skill-icons:instagram"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] md:p-1 text-md font-large leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://youtube.com/@rusticwheels"
        >
          <Icon name="logos:youtube-icon"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] md:p-1 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://linkedin.com/in/jaganmohan-m"
        >
          <Icon name="logos:linkedin-icon"/>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-sky-200 focus:shadow-1g block select-none rounded-[4px] lg:p-1 text-md font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] "
          href="https://github.com/jaganmohan/rusticwheels"
        >
          <Icon name="logos:github-icon"/>  
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>

  </NavigationMenuRoot>

  <!--<UNavigationMenu :items="items" class="w-full justify-center bg-stone-200 h-15" />-->

  <NuxtPage />

  <footer class="h-[100px] w-full bg-[#322] text-white content-center text-sm">
        <div class="w-fit flex m-auto">© 2025 All rights reserved by Jaganmohan M.</div>
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


/*import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/composables/define-shortcuts'
      },
      {
        label: 'useOverlay',
        icon: 'i-lucide-file-text',
        description: 'Display a modal/slideover within your application.',
        to: '/composables/use-overlay'
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/composables/use-toast'
      }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
]);
*/

const currentTrigger = ref('')

</script>

<style>

@import "tailwindcss";

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