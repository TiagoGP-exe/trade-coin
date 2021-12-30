import Head from 'next/head'
import { FC } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfCoins from '../components/ListOfCoins'

const Home: FC = () => (
  <div>
    <Header />
    <div className="relative flex flex-col justify-center items-center gap-12 mt-12">
      <ListOfCoins />
      <Footer />
    </div>
  </div>
)

export default Home
