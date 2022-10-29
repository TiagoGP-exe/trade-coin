import { api } from './api'

interface IHistory {
  id: string
  currency: string
  days: '1' | '7' | '14' | '30' | '360' | 'max'
}

export const getHistory = async ({ id, currency, days }: IHistory) => {
  const { data } = await api.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: currency,
      days: days,
    },
  })

  return data
}
