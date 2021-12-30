import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import logo from '../../assets/logo.svg'
import CurrencyItem from '../CurrencyItem'
import ItemsHeaders from '../ItemsHeaders'
import Search from '../Search'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="bg-white p-3 rounded-b-xl flex w-full justify-center">
      <div className="w-full flex max-w-screen-xl gap-y-2 flex-col sm:flex-row items-center justify-between">
        <Link href="/">
          <a className="w-32">
            <Image
              src={logo}
              layout="responsive"
              alt="Logo"
              className="cursor-pointer opacity-90  hover:opacity-100 duration-150 ease-in-out"
            />
          </a>
        </Link>
        <div className="middleContent gap-7">
          <ItemsHeaders title="Cryptocurrencies" />
          <ItemsHeaders title="Exchanges" goToPage="/exchanges" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 ">
          <Search text={searchValue} setText={setSearchValue} />
          <CurrencyItem />
        </div>
      </div>
    </div>
  )
}

export default Header
