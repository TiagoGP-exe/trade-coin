import { createContext, FC, useContext, useEffect, useState } from 'react'

interface ICurrencyContext {
  atualCurrency: string
  setAtualCurrency(value: string): void
}

const CurrencyContext = createContext<ICurrencyContext | null>(null)

export const CurrencyProvider: FC = ({ children }) => {
  const [atualCurrency, setAtualCurrency] = useState('usd')

  useEffect(() => {
    if (typeof window !== 'undefined' && atualCurrency) {
      const coin = localStorage.getItem('atualCurrency')

      setAtualCurrency(JSON.parse(coin))
    }
  }, [])

  const SetValue = (value: string) => {
    localStorage.setItem('atualCurrency', JSON.stringify(value))
    setAtualCurrency(value)
  }

  return (
    <CurrencyContext.Provider
      value={{ atualCurrency, setAtualCurrency: SetValue }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = (): ICurrencyContext => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used with CurrencyProvider')
  }

  return context
}
