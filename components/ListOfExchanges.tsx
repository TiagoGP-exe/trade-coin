import { FC } from 'react'
import ItemsOfExChanges from './ItemsOfExchanges'
import { ItemOfListSkeleton } from './ItemsOfList'

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

interface ListOfExchangesProps {
  exchanges: IExchanges[]
}
// fake array of 100 items of list
const fakeArray = Array.from({ length: 100 }, (_, i) => i)

const ListOfExchanges: FC<ListOfExchangesProps> = ({ exchanges }) => (
  <>
    <div className='bg-white dark:bg-[#202230] rounded-2xl max-w-screen-xl w-full xl:w-9/12'>
      {exchanges.length ? (
        <>
          {exchanges.map((item, index) => (
            <ItemsOfExChanges key={index} exchange={item} id={index} />
          ))}
        </>
      ) : (
        <>
          {fakeArray.map(item => (
            <ItemOfListSkeleton key={item} />
          ))}
        </>
      )}
    </div>
  </>
)

export default ListOfExchanges
