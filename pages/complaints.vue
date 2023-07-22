<template>
    <div class="w-full  px-4 md:px-0">
        <TheDescription title="Messages" :links="false" />

        <div class="flex w-full justify-between flex-col sm:flex-row items-center border-b pb-3 px-0 sm:px-20 dark:border-gray-700 gap-2">
            <USelectMenu v-model="selected" :options="people" placeholder="Filtrer par tag" />

            <div class="relative w-full sm:w-2/3 text-gray-600">
                <input type="search" name="search" placeholder="Recherchez un message"
                    class="bg-white border w-full dark:bg-slate-950 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
            </div>

            <button @click="isOpen = true"
                class="w-full sm:w-1/4  inline-flex items-center justify-center rounded-3xl text-sm text-white font-medium bg-blue-500 text-primary-foreground hover:bg-blue-500/90 h-11 px-8">
                Ajouter un message
            </button>
        </div>

        <UModal v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="">
                        <h2 class="pb-2 font-medium"> Ajouter un message</h2>
                        <p class="text-sm">L'ajout d'un message se fait complètement anonymement.</p>
                    </div>
                </template>

                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                        message</label>
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 dark:text-white rounded-lg border border-gray-700 dark:bg-gray-900 dark:border-gray-600"
                        placeholder="Votre message..."></textarea>

                    <label for="message" class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">Choix de la
                        catégorie</label>
                    <USelectMenu v-model="selected" :options="people" placeholder="Filtrer par tag" />
                </div>

                <template #footer>
                    <div class="flex justify-end gap-2">
                        <button @click="isOpen = false"
                            class="w-1/4  inline-flex items-center justify-center rounded-3xl text-sm text-black dark:text-white font-medium border text-primary-foreground h-11 px-8">
                            Annuler
                        </button>
                        <button
                            class="w-1/4  inline-flex items-center justify-center rounded-3xl text-sm text-white font-medium bg-blue-500 text-primary-foreground hover:bg-blue-500/90 h-11 px-8">
                            Ajouter
                        </button>
                    </div>
                </template>
            </UCard>
        </UModal>

        <section class="mx-auto container flex items-center justify-center gap-6 pb-8">
            <div class="flex w-[1400px] max-w-full flex-col items-start gap-4">
                <div class="flex flex-wrap w-full items-center justify-between py-4">
                    <UtilsCard v-for="(s, i) in 6" :key="i" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    ogTitle: 'Plaintes',
    ogDescription: 'Plaintes',
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
    title: 'Plaintes'
})

const people = ['Wade Cooper', 'Arlene McCoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smith', 'Emil Schaefer']

const selected = ref(people[0])

const isOpen = ref<boolean>(false)
</script>