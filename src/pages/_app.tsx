import SEO from '@/../next-seo.config'
import { londrinaSolid, ptRootUI } from '@/styles/fonts'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-pt-root-ui: ${ptRootUI.style.fontFamily};
          --font-londrina-solid: ${londrinaSolid.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
