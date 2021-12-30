import { useEffect, useRef, useState } from 'react'
import { getExchange } from '../services/getExchange'
import ItemsOfExChanges from './ItemsOfExchanges'

export interface IExchanges {
  country: string
  description: string
  has_trading_incentive: boolean
  id: string
  image: string
  name: string
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
  trust_score: number
  trust_score_rank: number
  url: string
  year_established: number
}

const ListOfExchanges = () => {
  const [exchangesValues, setExchangesValues] = useState<IExchanges[]>([])

  useEffect(() => {
    ;(async () => {
      const payload = await getExchange()
      setExchangesValues(payload)
    })()
  }, [])

  return (
    <>
      {exchangesValues && (
        <div className="bg-white rounded-2xl max-w-screen-xl w-full xl:w-9/12">
          {exchangesValues.map((item, index) => (
            <ItemsOfExChanges key={index} exchange={item} id={index} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListOfExchanges
