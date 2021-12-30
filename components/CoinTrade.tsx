import { FC, useEffect, useState } from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import { useCurrency } from '../context/Currency'
import { CoinInfosProps } from './CoinInfos'

const CoinTrade: FC<CoinInfosProps> = ({ infos }) => {
  const [firstValue, setFirstValue] = useState('1')
  const [secondValue, setSecondValue] = useState(infos.current_price.toString())
  const [swap, setSwap] = useState(false)
  const { atualCurrency } = useCurrency()

  useEffect(() => {
    setSecondValue(infos.current_price.toString())
  }, [infos])

  return (
    <div className='flex w-full bg-white p-4 rounded-xl mb-2'>
      <div className='flex flex-col py-2 md:py-0 sm:flex-row gap-y-5 justify-evenly w-full items-center '>
        <div className='flex text-slate-700 font-semibold items-center justify-between'>
          <div className='bg-slate-200 flex items-center gap-1 justify-center w-full py-2 px-3 rounded-l-xl'>
            <p>
              {swap
                ? atualCurrency.toUpperCase()
                : infos.symbol.toLocaleUpperCase()}
            </p>
          </div>

          <input
            type='number'
            className='flex p-2 rounded-r-xl bg-slate-100'
            placeholder='0'
            value={swap ? secondValue : firstValue}
            onChange={e =>
              swap
                ? (setSecondValue(e.target.value),
                  setFirstValue(
                    (Number(e.target.value) / infos.current_price).toString()
                  ))
                : (setFirstValue(e.target.value),
                  setSecondValue(
                    (Number(e.target.value) * infos.current_price).toString()
                  ))
            }
          />
        </div>

        <AiOutlineSwap
          className='text-lg font-bold text-slate-600 hover:text-slate-900 duration-300 hover:-scale-x-110 hover:scale-150 ease-in-out cursor-pointer'
          onClick={() => setSwap(!swap)}
        />

        <div className='flex text-slate-700 font-semibold items-center max-w-xs justify-between'>
          <div className='bg-slate-200 flex items-center gap-1 justify-center w-full py-2 px-3 rounded-l-xl'>
            <p>
              {!swap
                ? atualCurrency.toUpperCase()
                : infos.symbol.toLocaleUpperCase()}
            </p>
          </div>

          <input
            type='text'
            disabled
            placeholder='0'
            className='flex p-2 rounded-r-xl bg-slate-100'
            value={swap ? firstValue : secondValue}
            onChange={e =>
              swap
                ? (setFirstValue(e.target.value),
                  setSecondValue(
                    (Number(e.target.value) * infos.current_price).toString()
                  ))
                : setSecondValue(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CoinTrade
