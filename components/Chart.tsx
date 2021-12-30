import { FC, useEffect, useState } from 'react'
import { getHistory } from '../services/getHistory'
import Charts from 'react-apexcharts'
import { formatNumber } from '../utils/currency'
import { useCurrency } from '../context/Currency'

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
  { label: 'ALL', value: 'max' }
]

const Chart: FC<ChartProps> = ({ idCrypto, currency, name }) => {
  const [date, setDate] = useState<ChartValues>()
  const [days, setDays] = useState<ButtonsProps>({ label: '1D', value: '1' })
  const { atualCurrency } = useCurrency()

  useEffect(() => {
    ;(async () => {
      const payload = await getHistory({
        id: idCrypto,
        currency: atualCurrency,
        days: days.value
      })

      setDate(payload)
    })()
  }, [days, atualCurrency])

  return (
    <>
      {date && (
        <div className="bg-white p-2 rounded-xl duration-200">
          <div className="flex gap-1 flex-col sm:flex-row w-full sm:justify-between sm:items-center px-2 my-4">
            <h1 className="font-bold text-xl text-slate-700">
              {name} to {currency} Chart
            </h1>
            <div className="flex flex-row bg-slate-100 py-0.5 rounded-xl ">
              {Calendar.map(({ label, value }) => (
                <button
                  key={value}
                  className={`${
                    days.value === value && 'bg-white'
                  } hover:bg-white duration-150 px-3 py-1 ml-0.5 rounded-xl font-semibold text-slate-500 backdrop-blur-3xl`}
                  onClick={() => setDays({ label: label, value: value })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <Charts
            type="area"
            height={350}
            width="100%"
            series={[{ name: idCrypto, data: date.prices }]}
            options={{
              stroke: { curve: 'smooth', width: 2 },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.9,
                  stops: [0, 90, 100]
                }
              },
              chart: {
                toolbar: {
                  show: false
                }
              },
              grid: {
                borderColor: '#e9e9e9cc'
              },

              tooltip: {
                followCursor: true,
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
                y: {
                  formatter: e => new Intl.NumberFormat(atualCurrency).format(e)
                }
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                labels: {
                  style: { fontWeight: 'bold' },
                  formatter: e => new Intl.NumberFormat(atualCurrency).format(e)
                }
              }
            }}
          />
        </div>
      )}
    </>
  )
}

export default Chart
