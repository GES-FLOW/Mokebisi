<template>
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
                        <h1 class="font-[Montserrat] font-bold text-lg">
                            <NuxtLink to="/">Mokebisi</NuxtLink>
                        </h1>

                    </div>
                    <ul class="font-['Hind Madurai'] space-x-4 hidden md:flex">
                        <li
                            class="inline-block text-gray-500 uppercase link-underline link-underline-black link dark:text-gray-200">
                            <NuxtLink active-class="text-blue-500" to="/">Accueil</NuxtLink>
                        </li>
                        <li
                            class="inline-block text-gray-500 uppercase link-underline link-underline-black link dark:text-gray-200">
                            <NuxtLink active-class="text-blue-500" to="/complaints">Plaintes</NuxtLink>
                        </li>
                    </ul>
                </div>
                <UtilsThemeColor />
            </nav>
        </div>
    </header>
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
</script>

<style scoped>
/* .link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#4169E1, #4169E1)
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
} */
</style>