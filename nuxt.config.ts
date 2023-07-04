// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'assets/css/main.css'
    ],
    devtools: {enabled: true},
    modules: [
        '@nuxt/devtools',
        '@nuxthq/ui',
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        '@dargmuesli/nuxt-cookie-control',
        '@vueuse/nuxt',
        // '@nuxtjs/supabase'
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        storageKey: 'theme-color'
    },
    googleFonts: {
        prefetch: true,
        families: {
            Montserrat: true,
            Inter: true,
            'Hind Madurai': true,
        }
    }
})