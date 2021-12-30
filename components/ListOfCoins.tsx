import { useEffect, useRef, useState } from 'react'
import { useCurrency } from '../context/Currency'
import { IMarket } from '../interfaces/IMarket'
import { getMarket } from '../services/getMarket'
import ItemOfList from './ItemsOfList'

const ListOfCoins = () => {
  const [coinValues, setCoinValues] = useState<IMarket[]>([])
  const { atualCurrency } = useCurrency()

  useEffect(() => {
    ;(async () => {
      const payload = await getMarket({ currency: atualCurrency })
      setCoinValues(payload)
    })()
  }, [atualCurrency])

  return (
    <>
      {coinValues && (
        <div className="bg-white rounded-2xl max-w-screen-xl w-full xl:w-9/12">
          {coinValues.map((item, index) => (
            <ItemOfList key={index} coin={item} id={index} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListOfCoins
