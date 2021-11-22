import '../styles/globals.css'
import '@gouvfr/dsfr/dist/dsfr/dsfr.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
