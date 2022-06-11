import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
import Charts from 'react-apexcharts'
import { useCurrency } from '../context/Currency'
import { getHistory } from '../services/getHistory'

interface ChartProps {
  idCrypto: string
  currency: string
  name: string
}

interface ChartValues {
  market_caps: number[]
  prices: number[]
  total_volumes: number[]
}

interface ButtonsProps {
  label: string
  value: '1' | '7' | '30' | '360' | 'max' | '14'
}

const Calendar: ButtonsProps[] = [
  { label: '1D', value: '1' },
  { label: '7D', value: '7' },
  { label: '1M', value: '30' },
  { label: '1Y', value: '360' },
  { label: 'ALL', value: 'max' },
]

const Chart: FC<ChartProps> = ({ idCrypto, currency, name }) => {
  const [date, setDate] = useState<ChartValues>()
  const [days, setDays] = useState<ButtonsProps>({ label: '1D', value: '1' })
  const { atualCurrency } = useCurrency()
  const { theme } = useTheme()
  const color = theme === 'light' ? '#fff' : '#202230'

  useEffect(() => {
    ;(async () => {
      const payload = await getHistory({
        id: idCrypto,
        currency: atualCurrency,
        days: days.value,
      })

      setDate(payload)
    })()
  }, [days, atualCurrency, idCrypto])

  return (
    <>
      {date && (
        <div className='p-2 rounded-xl duration-200 w-full'>
          <div className='flex gap-1 flex-col sm:flex-row w-full sm:justify-between sm:items-center px-2 my-4'>
            <h1 className='font-bold text-xl text-slate-700 dark:text-slate-200'>
              {name} to {currency} Chart
            </h1>
            <div className='flex flex-row bg-slate-100 dark:bg-[#2C2F3F] py-0.5 rounded-xl '>
              {Calendar.map(({ label, value }) => (
                <button
                  key={value}
                  className={`${
                    days.value === value &&
                    'bg-white dark:bg-[#202230] dark:text-slate-200'
                  } hover:bg-white dark:hover:bg-[#3a3d52] duration-150 px-3 py-1 ml-0.5 rounded-xl font-semibold text-slate-500 backdrop-blur-3xl`}
                  onClick={() => setDays({ label: label, value: value })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className='dark:text-black'>
            <Charts
              type='area'
              height={350}
              width='100%'
              series={[{ name: idCrypto, data: date.prices }]}
              options={{
                stroke: { curve: 'smooth', width: 2 },
                dataLabels: {
                  enabled: false,
                },

                grid: {
                  borderColor: 'transparent',
                  strokeDashArray: 0,
                },

                fill: {
                  type: 'gradient',
                  colors: ['#008FFB', '#E91E63', '#9C27B0'],
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100],
                    gradientToColors: [color],
                  },
                },
                chart: {
                  toolbar: {
                    show: false,
                  },
                },

                tooltip: {
                  followCursor: true,
                  x: {
                    format: 'dd/MM/yy HH:mm',
                  },
                  y: {
                    formatter: e =>
                      new Intl.NumberFormat(atualCurrency).format(e),
                  },
                },
                xaxis: {
                  type: 'datetime',
                },
                yaxis: {
                  labels: {
                    style: { fontWeight: 'bold' },
                    formatter: e =>
                      new Intl.NumberFormat(atualCurrency).format(e),
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Chart
