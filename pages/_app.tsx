import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Impermanent Loss Calculator</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
