<template>
    <div class="w-full mx-auto container px-4 md:px-0">
      <TheDescription/>

      <section class="container flex items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div class="flex w-[980px] max-w-full flex-col items-start gap-4">
          <h2 class="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-3xl">
            Derniers messages publiés</h2>
          <div class="flex flex-wrap w-full items-center justify-between py-4" >
            <UtilsCard v-for="(s, i) in 3" :key="i"/>
          </div>
        </div>
      </section>
    </div>
</template>

<script setup lang="ts">
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
  title: 'Accueil'
})
</script>