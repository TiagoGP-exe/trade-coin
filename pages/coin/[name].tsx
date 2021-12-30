import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CoinInfos from '../../components/CoinInfos'
import CoinInfosDetails from '../../components/CoinInfosDetails'
import CoinTrade from '../../components/CoinTrade'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Paths from '../../components/Paths'
import { useCurrency } from '../../context/Currency'
import { IMarket } from '../../interfaces/IMarket'
import { getCoin } from '../../services/getCoin'
const Chart = dynamic(() => import('../../components/Chart'), { ssr: false })

const pathOfRoute = ['Cryptocurrencies', 'Coins']

const CoinDetails = () => {
  const {
    query: { name },
  } = useRouter()
  const [coinValues, setCoinValues] = useState<IMarket>()
  const { atualCurrency } = useCurrency()

  useEffect(() => {
    ;(async () => {
      const payload = await getCoin({ id: name, currency: atualCurrency })
      setCoinValues(payload[0])
    })()
  }, [name, atualCurrency])

  return (
    <>
      <Header />
      <div className='flex w-full justify-center items-center'>
        <div className='max-w-screen-xl p-3 w-full'>
          <Paths path={pathOfRoute} finalPath={coinValues?.name} />

          {coinValues && (
            <>
              <CoinInfos infos={coinValues} />
              <div className='flex flex-col-reverse lg:flex-row gap-2 w-full'>
                <div className='flex flex-col w-full'>
                  <CoinTrade infos={coinValues} />
                  <Chart
                    idCrypto={coinValues.id}
                    currency={atualCurrency}
                    name={coinValues.name}
                  />
                </div>
                <CoinInfosDetails infos={coinValues} />
              </div>
              <div className='flex flex-col justify-center items-center mt-12 w-full '>
                <Footer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CoinDetails
