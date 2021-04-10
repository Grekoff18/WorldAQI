import api, { setAuthorizationHeader } from './api'

const URLS = {
  worldChartData: 'http://localhost:3000/chart/world',
}

export const getChartData = async () => {
  setAuthorizationHeader()
  const response = await api.get(URLS.worldChartData)
  return response
}
