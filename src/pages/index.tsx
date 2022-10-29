import Cookies from 'js-cookie'
import { FC } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfCoins from '../components/ListOfCoins'
import { IMarket } from '../../interfaces/IMarket'
import { getMarket } from '../services/getMarket'

interface HomeProps {
  coinValues: IMarket[]
}

const Home: FC<HomeProps> = ({ coinValues }) => (
  <div className='relative flex flex-col justify-center items-center gap-12 mt-12'>
    <ListOfCoins coins={coinValues} />
    {coinValues.length > 0 && <Footer />}
  </div>
)

export const getStaticProps = async () => {
  const currency = Cookies.get('currency') || 'usd'

  const payload = await getMarket(currency)
  return {
    props: {
      coinValues: payload,
      revalidate: 60 * 60 * 1, // 1 hour
    },
  }
}

export default Home
