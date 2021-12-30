import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfExchanges, { IExchanges } from '../components/ListOfExchanges'
import { getExchange } from '../services/getExchange'

const exchange = () => {
  const [exchangesValues, setExchangesValues] = useState<IExchanges[]>([])

  useEffect(() => {
    ;(async () => {
      const payload = await getExchange()
      setExchangesValues(payload)
    })()
  }, [])

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-12 mt-12">
        <ListOfExchanges exchanges={exchangesValues} />
        {exchangesValues.length > 0 && <Footer />}
      </div>
    </div>
  )
}

export default exchange
