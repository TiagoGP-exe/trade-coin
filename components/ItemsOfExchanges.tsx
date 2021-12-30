import Link from 'next/link'
import { FC } from 'react'
import { useCurrency } from '../context/Currency'
import { formatNumber } from '../utils/currency'
import { IExchanges } from './ListOfExchanges'

interface ItemOfExcangesProps {
  exchange: IExchanges
  id: number
}

const ItemsOfExChanges: FC<ItemOfExcangesProps> = ({ exchange, id }) => {
  const { atualCurrency } = useCurrency()

  return (
    <Link href={exchange.url}>
      <a>
        <div
          className={`flex flex-row gap-3 py-3 px-4 hover:bg-slate-200 duration-150 cursor-pointer items-center rounded-xl ${
            id > 0 && 'mt-2'
          }`}
        >
          <div className="flex flex-row gap-3 flex-1 items-center justify-start ">
            <p className="text-sm text-gray-400 font-semibold">#{++id}</p>
            <img
              src={exchange.image}
              alt={exchange.name}
              className={`h-6 w-6 hover:scale-125 duration-200 ease-in-out`}
            />
            <h2 className="font-bold ">{exchange.name}</h2>
          </div>
          <p className="flex flex-1 font-semibold justify-end">
            {formatNumber(exchange.trade_volume_24h_btc, atualCurrency)}
          </p>
          <p className="hidden  md:flex flex-1 justify-center font-semibold">
            {exchange.year_established || '?'}
          </p>
          <p className={`hidden  md:flex flex-1 justify-center font-semibold`}>
            {exchange.country || '?'}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ItemsOfExChanges
