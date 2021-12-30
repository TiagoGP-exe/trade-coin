import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { CurrencyProvider } from '../context/Currency'
import '../styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <CurrencyProvider>
    <Head>
      <title>Trade Coin</title>
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <Component {...pageProps} />
  </CurrencyProvider>
)

export default MyApp
