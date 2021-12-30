import { api } from './api'

interface ICoin {
  id: string
  currency: string
}

export const getCoin = async ({ id, currency }: ICoin) => {
  const { data } = await api.get('/coins/markets', {
    params: {
      ids: id,
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false
    }
  })

  return data
}
