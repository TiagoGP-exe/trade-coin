import Footer from '../components/Footer'
import Header from '../components/Header'
import ListOfCoins from '../components/ListOfCoins'
import ListOfExchanges from '../components/ListOfExchanges'

const exchange = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-12 mt-12">
        <ListOfExchanges />
        <Footer />
      </div>
    </div>
  )
}

export default exchange
