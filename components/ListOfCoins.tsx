import { FC } from 'react'
import { IMarket } from '../interfaces/IMarket'
import ItemOfList from './ItemsOfList'

interface ListOfCoinsProps {
  coins: IMarket[]
}

const ListOfCoins: FC<ListOfCoinsProps> = ({ coins }) => (
  <>
    {coins && (
      <div className='bg-white dark:bg-[#202230] rounded-2xl max-w-screen-xl w-full xl:w-9/12'>
        {coins.map((item, index) => (
          <ItemOfList key={index} coin={item} id={index} />
        ))}
      </div>
    )}
  </>
)

export default ListOfCoins
