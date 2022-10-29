import { FC } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfExchanges, { IExchanges } from '../components/ListOfExchanges'
import { getExchange } from '../services/getExchange'

interface ExchangesProps {
  exchanges: IExchanges[]
}

const exchange: FC<ExchangesProps> = ({ exchanges }) => (
  <div className='flex flex-col justify-center items-center gap-12 mt-12'>
    <ListOfExchanges exchanges={exchanges} />
    {exchanges.length > 0 && <Footer />}
  </div>
)

export const getStaticProps = async () => {
  const payload = await getExchange()
  return {
    props: {
      exchanges: payload,
      revalidate: 60 * 60 * 1, // 1 hour
    },
  }
}

export default exchange
