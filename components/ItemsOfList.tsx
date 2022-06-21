import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'
import { useCurrency } from '../context/Currency'
import { IMarket } from '../interfaces/IMarket'
import { formatNumber, manualFormarNumber } from '../utils/currency'
import Percentage from './Percentage'

interface ItemOfListProps {
  coin: IMarket
  id: number
}

const ItemOfList: FC<ItemOfListProps> = ({ coin, id }) => {
  const { atualCurrency } = useCurrency()
  return (
    <Link href={`/coin/${coin.id}`}>
      <a>
        <div
          className={`flex flex-row gap-3 py-3 px-4 hover:bg-slate-200 dark:hover:bg-[#383b56] duration-150 cursor-pointer items-center rounded-xl `}
        >
          <div className='flex flex-row gap-3 flex-1 items-center justify-start '>
            <p className='text-sm text-gray-400'>{++id}</p>
            <div className='relative h-6 w-6 hover:scale-125 duration-200 ease-in-out rounded-lg'>
              <Image src={coin.image} alt={coin.name} layout='fill' />
            </div>

            <h2 className='font-bold '>{coin.name}</h2>
            <p className='font-semibold text-gray-400'>
              {coin.symbol?.toUpperCase()}
            </p>
          </div>
          <p className='flex flex-1 font-semibold justify-end'>
            {coin.current_price > 1
              ? formatNumber(coin.current_price, atualCurrency)
              : manualFormarNumber(atualCurrency, coin.current_price)}
          </p>
          <div className='hidden sm:flex'>
            <Percentage value={coin.price_change_percentage_24h} />
          </div>
          <p className='hidden  md:flex flex-1 justify-center font-semibold'>
            {formatNumber(coin.market_cap, atualCurrency)}
          </p>
          <p className={`hidden  md:flex flex-1 justify-center font-semibold`}>
            {formatNumber(coin.total_volume, atualCurrency)}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default memo(ItemOfList)

export const ItemOfListSkeleton: FC = () => {
  return (
    <div className='flex flex-row gap-3 py-3 px-4 duration-150 cursor-pointer items-center rounded-xl w-full animate-pulse'>
      <div className='flex rounded-full bg-slate-200 dark:bg-[#383b56] h-8 w-8 '></div>
      <div className='h-4 bg-slate-200 dark:bg-[#383b56]  rounded-full flex-1'></div>
    </div>
  )
}
