import Link from 'next/link'
import { FC, useState } from 'react'
import CurrencyItem from './CurrencyItem'
import ItemsHeaders from './ItemsHeaders'
import Search from './Search'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='bg-white p-3 rounded-b-xl flex w-full justify-center'>
      <div className='w-full flex max-w-screen-xl gap-y-2 flex-col sm:flex-row items-center justify-between'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' className='flex-shrink-0 w-32' />
          </a>
        </Link>
        <div className='middleContent gap-7'>
          <ItemsHeaders title='Cryptocurrencies' />
          <ItemsHeaders title='Exchanges' goToPage='/exchanges' />
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-2 '>
          <Search text={searchValue} setText={setSearchValue} />
          <CurrencyItem />
        </div>
      </div>
    </div>
  )
}

export default Header
