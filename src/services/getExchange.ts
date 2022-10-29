import { api } from './api'

export const getExchange = async () => {
  const { data } = await api.get('/exchanges')

  return data
}
