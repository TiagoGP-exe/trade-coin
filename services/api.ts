import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/'
})
