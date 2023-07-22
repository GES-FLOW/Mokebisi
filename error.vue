<template>
    <div class="h-screen w-screen bg-gray-200/40 dark:bg-gray-950 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div class="max-w-md">
                <div class="text-5xl dark:text-white font-bold">404</div>
                <p class="text-2xl md:text-3xl font-light dark:text-white leading-normal">Sorry we couldn't find this page.
                </p>
                <p class="mb-8 dark:text-white">But dont worry, you can find plenty of other things on our homepage.</p>

                <NuxtLink to="/">
                    <button
                        class="px-4 w-full uppercase inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Accueil</button>
                </NuxtLink>

            </div>
            <div class="max-w-lg">
                <img src="@/assets/img/404.svg" alt="404 error image">
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    ogTitle: 'Page Non Trouvée',
    ogDescription: 'Page Non Trouvée',
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
    title: 'Page Non Trouvée'
})
</script>