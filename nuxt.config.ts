// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
                    crossorigin: ''
                }
            ]
        }
    },
    typescript: {
        shim: false
      },
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/scss/global.scss";'
            }
          }
        }
    },
    modules: [
        '@pinia/nuxt',
    ]
})
