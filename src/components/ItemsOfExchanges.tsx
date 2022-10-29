import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import { useCurrency } from '../hooks/Currency'
import { formatNumber } from '../utils/currency'
import { IExchanges } from './ListOfExchanges'

interface ItemOfExcangesProps {
  exchange: IExchanges
  id: number
}

const ItemsOfExChanges: FC<ItemOfExcangesProps> = ({ exchange, id }) => {
  const { atualCurrency } = useCurrency()
  const { push } = useRouter()

  return (
    <div
      className={`flex flex-row gap-3 py-3 px-4 hover:bg-slate-200 dark:hover:bg-[#383b56] duration-150 cursor-pointer items-center rounded-xl ${
        id > 0 && 'mt-2'
      }`}
      onClick={() => push(exchange.url)}
    >
      <div className='flex flex-row gap-3 flex-1 items-center justify-start '>
        <p className='text-sm text-gray-400 font-semibold'>#{++id}</p>
        <Image
          src={exchange.image}
          alt={exchange.name}
          className={`hover:scale-125 duration-200 ease-in-out rounded-lg`}
          width={32}
          height={32}
        />
        <h2 className='font-bold '>{exchange.name}</h2>
      </div>
      <p className='flex flex-1 font-semibold justify-end'>
        {formatNumber(exchange.trade_volume_24h_btc, atualCurrency)}
      </p>
      <p className='hidden  md:flex flex-1 justify-center font-semibold'>
        {exchange.year_established || '?'}
      </p>
      <p className={`hidden  md:flex flex-1 justify-center font-semibold`}>
        {exchange.country || '?'}
      </p>
    </div>
  )
}

export default memo(ItemsOfExChanges)
