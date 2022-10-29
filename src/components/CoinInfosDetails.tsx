import { FC } from 'react'
import { useCurrency } from '../hooks/Currency'
import { formatNumber } from '../utils/currency'
import { CoinInfosProps } from './CoinInfos'
import Percentage from './Percentage'

interface ItemCoinDetails {
  title: string
}

const CoinInfosDetails: FC<CoinInfosProps> = ({ infos }) => {
  const { atualCurrency } = useCurrency()

  return (
    <div className='text-slate-700 bg-slate-100 dark:text-slate-100 px-6 py-4 dark:bg-[#282b3f]  rounded-xl backdrop-blur-2xl transition-all duration-200 ease-in-out'>
      <h1 className='font-bold text-2xl  mb-2'>
        {infos.symbol.toLocaleUpperCase()} Price Statistics
      </h1>

      <ItemCoinDetails title='Market Rank'>
        <p>
          {infos.market_cap_rank ? `#${infos.market_cap_rank}` : 'Unranked'}
        </p>
      </ItemCoinDetails>

      <ItemCoinDetails title={`${infos.name} Price`}>
        <p>{formatNumber(infos.current_price, atualCurrency)}</p>
      </ItemCoinDetails>

      <ItemCoinDetails title='Price change 24H'>
        <p>{formatNumber(infos.price_change_24h, atualCurrency)}</p>
        <Percentage value={infos.price_change_percentage_24h} />
      </ItemCoinDetails>

      <ItemCoinDetails title='24h Low / 24h High'>
        <p>{formatNumber(infos.low_24h, atualCurrency)}/</p>
        <p>{formatNumber(infos.high_24h, atualCurrency)}</p>
      </ItemCoinDetails>

      <ItemCoinDetails title='Market Cap'>
        <p>{formatNumber(infos.market_cap_change_24h, atualCurrency)}</p>
        <Percentage value={infos.market_cap_change_percentage_24h} />
      </ItemCoinDetails>

      <ItemCoinDetails title='Fully Diluted Market Cap'>
        <p>{formatNumber(infos.fully_diluted_valuation, atualCurrency)}</p>
      </ItemCoinDetails>
    </div>
  )
}

const ItemCoinDetails: FC<ItemCoinDetails> = ({ title, children }) => (
  <div className='flex py-2 text-sm font-semibold text-slate-600 dark:text-slate-100 w-full items-center justify-between border-gray-100'>
    <p>{title}</p>
    <div className='flex flex-col items-end'>{children}</div>
  </div>
)

export default CoinInfosDetails
