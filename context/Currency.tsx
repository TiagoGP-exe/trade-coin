import { createContext, FC, useContext, useEffect, useState } from 'react'

interface ICurrencyContext {
  atualCurrency: string
  setAtualCurrency(value: string): void
}

const CurrencyContext = createContext<ICurrencyContext | null>(null)

export const CurrencyProvider: FC = ({ children }) => {
  const [atualCurrency, setAtualCurrency] = useState('usd')

  const SetValue = (value: string) => {
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
