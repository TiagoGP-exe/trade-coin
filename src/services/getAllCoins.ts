import { api } from './api'

export const getAllCoins = async () => {
  const { data } = await api.get('/coins/list')

  return data
}
