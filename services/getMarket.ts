import { api } from './api'

interface IMarrket {
  currency: string
}

export const getMarket = async ({ currency }: IMarrket) => {
  const { data } = await api.get('/coins/markets', {
    params: {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: true
    }
  })

  return data
}
