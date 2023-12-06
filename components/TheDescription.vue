<template>
    <section class="grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div class="flex flex-col items-center gap-2">
            <h1 class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                {{ title }}
            </h1>

            <p class="text-center text-lg text-muted-foreground sm:text-xl">
                {{ description }}
            </p>
        </div>
        <div v-show="links" class="flex flex-col justify-center gap-2 sm:flex-row sm:gap-4">
            <NuxtLink to="/complaints"
                class="inline-flex items-center justify-center rounded-2xl text-sm text-white font-medium bg-blue-500 text-primary-foreground hover:bg-blue-500/90 h-11 px-8">
                Voir les messages
            </NuxtLink>
            <NuxtLink
                class="inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
                href="/">Faire des suggestions
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Items {
    title: string,
    description?: string
    links?: boolean
}
const props = defineProps<Items>()
</script>
