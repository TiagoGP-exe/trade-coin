import { FC, useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { CgCloseO } from 'react-icons/cg'
import { getAllCoins } from '../services/getAllCoins'
import Link from 'next/link'

interface SearchProps {
  text: string
  setText: (newText: string) => void
}

interface SearchDates {
  id: string
  symbol: string
  name: string
}

const correctSearch = (
  text: string,
  setText: (value: string) => void,
  date: SearchDates[],
  setFilter: (newDate: SearchDates[]) => void
) => {
  setText(text)
  const filterResult = date.filter(
    item =>
      item.name.toLowerCase().startsWith(text.toLowerCase()) ||
      item.symbol.startsWith(text.toLowerCase())
  )
  setFilter(filterResult)
}

const Search: FC<SearchProps> = ({ text, setText }) => {
  const [focused, setFocused] = useState(false)
  const [date, setDate] = useState<SearchDates[]>()
  const [filterDate, setFilterDate] = useState<SearchDates[]>()

  const filtered = filterDate || date

  const setBackgroundColor = focused
    ? 'border-slate-200 bg-slate-100 dark:border-[#aab0d2] dark:bg-[#2C2F3F]'
    : 'border-transparent bg-slate-200 dark:bg-[#373B54]'

  const closeModal = () => {
    const button = setTimeout(() => {
      setFocused(false)
    }, 500)

    return () => clearTimeout(button)
  }

  useEffect(() => {
    ;(async () => {
      const atualCoins = JSON.parse(localStorage.getItem('idsCoins'))
      if (atualCoins) {
        const dateAtualCoins = JSON.parse(localStorage.getItem('dateCoins'))

        if (
          new Date().getTime() - new Date(dateAtualCoins).getTime() <=
          86_400_000
        ) {
          setDate(atualCoins)
          return
        }
      }

      const payload = await getAllCoins()
      setDate(payload)
      const timeAtual = new Date()
      localStorage.setItem('idsCoins', JSON.stringify(payload))
      localStorage.setItem('dateCoins', JSON.stringify(timeAtual))
    })()
  }, [])

  return (
    <div className='relative max-w-full'>
      <div
        className={`flex flex-row items-center border-2 z-30 ${setBackgroundColor} rounded-lg py-2  sm:py-1 gap-1 px-2 `}
      >
        <HiOutlineSearch size={18} className='text-slate-400' />
        <input
          className='bg-transparent text-sm py-1 placeholder:font-semibold font-semibold placeholder:text-slate-400 focus:text-slate-600 dark:focus:text-slate-200  text-slate-400 '
          type='text'
          value={text}
          placeholder='Search'
          onFocus={() => setFocused(true)}
          onBlur={closeModal}
          onChange={e =>
            correctSearch(e.target.value.trim(), setText, date, setFilterDate)
          }
        />
        {text.length > 0 && (
          <CgCloseO
            className='cursor-pointer'
            size={18}
            color='#A6B0C3'
            onClick={() => setText('')}
          />
        )}
      </div>
      {focused && text.length > 0 && (
        <div className='absolute  text-xs z-[8] bg-white dark:bg-[#373B54] rounded-b-xl top-10 w-full shadow-2xl'>
          {filtered.slice(0, 10).map(item => (
            <div
              className='flex cursor-pointer font-semibold '
              key={item.id + item.name}
            >
              <Link href={`/coin/${item.id}`}>
                <a className='flex gap-1 py-2 px-3 w-full z-30 text-slate-600 dark:text-slate-200 items-center hover:bg-slate-300 dark:hover:bg-[#31354c] rounded-xl'>
                  <p>{item.name}</p>
                  <p className='py-1 px-2 bg-slate-100 dark:bg-[#545979] rounded-md'>
                    {item.symbol?.toUpperCase()}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
