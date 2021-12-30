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
    <div className='flex flex-col justify-center gap-2 sm:flex-row sm:justify-between pt-2 pb-4'>
      <div className='flex items-center gap-2'>
        <img
          src={infos?.image}
          alt={infos?.name}
          style={{ width: 32, height: 32 }}
          className='rounded-lg'
        />
        <h1 className='font-bold text-2xl text-slate-800'>{infos?.name}</h1>
        <p className='font-semibold bg-slate-300 text-xs  rounded-lg py-1 px-2 text-slate-500'>
          {infos?.symbol.toLocaleUpperCase()}
        </p>
        <p className='flex font-semibold text-xs bg-slate-600 gap-1 rounded-lg px-2 py-0.5 justify-center items-center text-white'>
          {infos.market_cap_rank ? `Rank#${infos.market_cap_rank}` : 'Unranked'}
        </p>
      </div>
      <div className='flex items-center gap-2 '>
        <h1 className='font-bold text-2xl text-slate-800'>
          {infos?.current_price > 1
            ? formatNumber(infos?.current_price, atualCurrency)
            : manualFormarNumber(atualCurrency, infos?.current_price)}
        </h1>
        <h2
          className={`flex ${
            infos?.price_change_percentage_24h > 0
              ? 'bg-green-500'
              : 'bg-red-500'
          } font-semibold text-white rounded-lg py-1 px-2 items-center  gap-x-0.5`}
        >
          {infos?.price_change_percentage_24h > 0 ? (
            <AiFillCaretUp />
          ) : (
            <AiFillCaretDown />
          )}
          {infos?.price_change_percentage_24h
            .toPrecision(2)
            .toString()
            .replace('-', '')}
          %
        </h2>
      </div>
    </div>
  )
}

export default CoinInfos
