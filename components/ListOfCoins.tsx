import { FC } from 'react'
import { IMarket } from '../interfaces/IMarket'
import ItemOfList, { ItemOfListSkeleton } from './ItemsOfList'

interface ListOfCoinsProps {
  coins: IMarket[]
}

// fake array of 100 items of list
const fakeArray = Array.from({ length: 100 }, (_, i) => i)

const ListOfCoins: FC<ListOfCoinsProps> = ({ coins }) => (
  <>
    <div className='bg-white dark:bg-[#202230] rounded-2xl max-w-screen-xl w-full xl:w-9/12'>
      {coins.length ? (
        <>
          {coins.map((item, index) => (
            <ItemOfList key={index} coin={item} id={index} />
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

export default ListOfCoins
