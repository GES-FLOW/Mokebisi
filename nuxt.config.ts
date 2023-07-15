// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     app: {
        head: {
            title: "MOKEBISI",
            meta: [
                {
                    charset: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "MOKEBISI",
                },
            ],
            link: [{rel: "icon", type: "image/x-icon", href: "/logo.ico"}],
        },
    },
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