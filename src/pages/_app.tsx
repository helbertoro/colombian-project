import '@/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-8S3J4X31GY" />
    </>
  )
}
