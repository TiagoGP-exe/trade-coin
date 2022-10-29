/* eslint @typescript-eslint/no-extra-semi: 0 */
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC, useState } from 'react'
import Header from '../components/Header'
import { CurrencyProvider } from '../hooks/Currency'
import { animations } from '../lib/animations'
import '../styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const startIndex = 0
  const [animation, setAnimation] = useState(animations[startIndex])
  const [exitBefore, setExitBefore] = useState(false)

  console.log('exit before ', exitBefore)

  return (
    <ThemeProvider attribute='class'>
      <CurrencyProvider>
        <Head>
          <title>Trade Coin</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>
        <Header />
        <LazyMotion features={domAnimation}>
          <AnimatePresence presenceAffectsLayout={!exitBefore}>
            <m.div
              key={router.route.concat(animation.name)}
              className='page-wrap'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={animation.variants}
              transition={animation.transition}
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </CurrencyProvider>
    </ThemeProvider>
  )
}

export default MyApp
