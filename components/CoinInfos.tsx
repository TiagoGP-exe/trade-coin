import { FC } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useCurrency } from '../context/Currency'
import { IMarket } from '../interfaces/IMarket'
import { formatNumber, manualFormarNumber } from '../utils/currency'

export interface CoinInfosProps {
  infos: IMarket
}

const CoinInfos: FC<CoinInfosProps> = ({ infos }) => {
  const { atualCurrency } = useCurrency()

  return (
    <div className='flex  items-stretch  gap-2 justify-between pb-4 '>
      <div className='flex items-center gap-3 '>
        <img
          src={infos?.image}
          alt={infos?.name}
          className='rounded-lg w-14 h-14 '
        />
        <div>
          <h1 className='font-bold text-2xl text-slate-800 dark:text-slate-200'>
            {infos?.name}
          </h1>
          <p className='font-semibold  text-xs  rounded-lg  text-slate-500'>
            {infos?.symbol.toLocaleUpperCase()}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <h1 className='font-bold text-xl md:text-2xl text-slate-800 dark:text-slate-200'>
          {infos?.current_price > 1
            ? formatNumber(infos?.current_price, atualCurrency)
            : manualFormarNumber(atualCurrency, infos?.current_price)}
        </h1>
        <h2
          className={`flex ${
            infos?.price_change_percentage_24h > 0
              ? 'bg-green-500'
              : 'bg-red-500'
          } font-semibold text-white dark:text-[#202230] text-xs rounded-lg py-1 px-2 items-center  gap-x-0.5`}
        >
          {infos?.price_change_percentage_24h > 0 ? (
            <AiFillCaretUp />
          ) : (
            <AiFillCaretDown />
          )}
          {infos?.price_change_percentage_24h
            ?.toPrecision(2)
            .toString()
            .replace('-', '') ?? 0.0}
          %
        </h2>
      </div>
    </div>
  )
}

export default CoinInfos
