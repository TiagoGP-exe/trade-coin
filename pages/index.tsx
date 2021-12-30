import { FC, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfCoins from '../components/ListOfCoins'
import { useCurrency } from '../context/Currency'
import { IMarket } from '../interfaces/IMarket'
import { getMarket } from '../services/getMarket'

const Home: FC = () => {
  const [coinValues, setCoinValues] = useState<IMarket[]>([])
  const { atualCurrency } = useCurrency()

  useEffect(() => {
    ;(async () => {
      const payload = await getMarket(atualCurrency)
      setCoinValues(payload)
    })()
  }, [atualCurrency])

  return (
    <div>
      <Header />
      <div className='relative flex flex-col justify-center items-center gap-12 mt-12'>
        <ListOfCoins coins={coinValues} />
        {coinValues.length > 0 && <Footer />}
      </div>
    </div>
  )
}

export default Home
