import Link from 'next/link'
import { FC, useState } from 'react'
import CurrencyItem from './CurrencyItem'
import ItemsHeaders from './ItemsHeaders'
import Logo from './Logo'
import Search from './Search'
import ToggleMode from './ToggleMode'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='bg-white dark:bg-[#202230] p-4 rounded-b-xl flex flex-col sm:flex-row gap-3 items-center w-full justify-center relative'>
      <div className='w-full flex max-w-screen-xl gap-y-2 flex-col sm:flex-row items-center justify-between'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='middleContent gap-7'>
          <ItemsHeaders title='Cryptocurrencies' />
          <ItemsHeaders title='Exchanges' goToPage='/exchanges' />
        </div>
        <div className='flex gap-2 flex-col sm:flex-row'>
          <Search text={searchValue} setText={setSearchValue} />
          <div className='flex gap-2 justify-center'>
            <CurrencyItem />
            <ToggleMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
