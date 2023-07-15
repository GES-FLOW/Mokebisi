<template>
  <main class="h-screen w-full dark:bg-slate-950">
    <header class="w-full dark:bg-slate-950 bg-white py-4 border-b dark:border-gray-700">
      <div class="container mx-auto px-4 md:px-0">
        <nav class="w-full flex justify-between items-center">
          <div class="flex items-center md:hidden">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
              <Icon name="mdi:apps" size="30" />
            </UDropdown>
          </div>
          <div class="flex justify-between items-center space-x-8">
            <div class="flex space-x-2 items-center">
              <Icon name="mdi:message-alert-outline" size="30" />
              <h1 class="font-[Montserrat] font-bold text-lg">Mokebisi</h1>

            </div>
            <ul class="font-['Hind Madurai'] space-x-2 hidden md:flex">
              <li class="inline-block text-gray-500 dark:text-gray-200">Accueil</li>
              <li class="inline-block text-gray-500 dark:text-gray-200">Plaintes</li>
            </ul>
          </div>
          <div class="flex justify-between items-center">
            <div
              @click="() => $colorMode.value === 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'"
              class="flex items-center justify-center h-10 w-10 hover:bg-blue-200/50 hover:dark:bg-gray-100/10 rounded-full cursor-pointer">
              <Icon v-show="$colorMode.value === 'light'" name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                size="25" />
              <Icon v-show="$colorMode.value === 'dark'" name="line-md:moon-loop" size="25" />
            </div>
            <div
              class="flex items-center justify-center h-10 w-10 hover:bg-blue-200/50 hover:dark:bg-gray-100/10 rounded-full cursor-pointer">
              <Icon name="mdi:twitter" size="25" />
            </div>
            <div
              class="hidden md:flex items-center justify-center h-10 w-10 hover:bg-blue-200/50 hover:dark:bg-gray-100/10 rounded-full cursor-pointer">
              <Icon name="mdi:github" size="25" />
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="w-full mx-auto container px-4 md:px-0">
      <section class="grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div class="flex flex-col items-center gap-2">
          <h1 class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            MOKEBISI</h1>

          <p class="text-center text-lg text-muted-foreground sm:text-xl">
            Tout en restant anonyme, venez nous dire ce qui vous énerve au 242
          </p>
        </div>
        <div class="flex flex-col justify-center gap-2 sm:flex-row sm:gap-4">
          <NuxtLink
            class="inline-flex items-center justify-center rounded-2xl text-sm text-white font-medium bg-blue-500 text-primary-foreground hover:bg-blue-500/90 h-11 px-8">
            Voir les messages
          </NuxtLink>
          <NuxtLink
            class="inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            href="https://github.com/ln-dev7/camerenerve">Contribuer sur
            GitHub
          </NuxtLink>
        </div>
      </section>
      <section class="container flex items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div class="flex w-[980px] max-w-full flex-col items-start gap-4">
          <h2 class="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-3xl">
            Derniers messages publiés</h2>
          <div class="flex flex-wrap w-full items-center justify-between py-4">
            <div class="w-full md:w-[45%] lg:w-[30%] my-2">
              <UCard>
                <template #header />

                Body

                <template #footer />
              </UCard>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] my-2">
              <UCard>
                <template #header />

                Body

                <template #footer />
              </UCard>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] my-2">
              <UCard>
                <template #header />

                Body

                <template #footer />
              </UCard>
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]

useSeoMeta({
  ogTitle: 'Accueil',
  ogDescription: 'Accueil',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'fr',
  },
})
</script>