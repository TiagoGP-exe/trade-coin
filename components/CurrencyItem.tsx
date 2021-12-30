import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useCurrency } from '../context/Currency'

const currency = ['usd', 'eur', 'brl']

const CurrencyItem = () => {
  const { atualCurrency, setAtualCurrency } = useCurrency()
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    const button = setTimeout(() => {
      setIsVisible(false)
    }, 200)

    return () => clearTimeout(button)
  }

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setIsVisible(true)}
        onBlur={() => closeModal()}
        className='relative w-full bg-white border duration-150 border-gray-300 rounded-md shadow-sm pl-3 pr-10 xl:pr-6 cursor-pointer ease-out py-2 text-left focus:outline-none focus:ring-1 focus:ring-offset-sky-300 sm:text-sm'
      >
        <span className='flex items-center '>
          <img
            src={`/${atualCurrency.toUpperCase()}.png`}
            className='flex-shrink-0 h-6 w-6'
          />
          <span className='ml-2 pr-2'>{atualCurrency.toUpperCase()}</span>
        </span>
        <span className=' absolute inset-y-0 right-0 flex flex-col items-center pr-3 pointer-events-none text-gray-400 justify-center'>
          <FaChevronUp size={10} />
          <FaChevronDown size={10} />
        </span>
      </button>
      <ul
        className={`${
          !isVisible && 'hidden opacity-0'
        } absolute z-10 mt-1 w-full bg-white shadow-lg duration-150 transition-all max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
        role='listbox'
        aria-labelledby='listbox-label'
        aria-activedescendant='listbox-option-3'
      >
        {currency.map(item => (
          <li
            key={item}
            className={`${
              atualCurrency === item && 'bg-slate-300'
            } text-gray-900 cursor-pointer hover:bg-slate-200 duration-75 select-none flex items-center relative py-2 pl-3 pr-9`}
            id='listbox-option-0'
            role='option'
            onClick={() => setAtualCurrency(item)}
          >
            <img
              src={`/${item.toUpperCase()}.png`}
              alt={item}
              className='flex-shrink-0 h-6 w-6 rounded-full'
            />
            <span className='font-normal ml-3 block'>{item.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrencyItem
