//import axios from '@/api/api'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { AxiosResponse } from 'axios'
import store from '@/store'

const getToken = type => {
  localStorage.getItem(type ? 'accessToken' : 'refreshToken')
}

const refreshAuthLogic = async failedRequest => {
  try {
    const tokens = await axios.get(
      'http://localhost:3000/auth/refreshAccessToken',
      {
        username: store.getters['user/userName']
          ? store.getters['user/userName']
          : '',
        refreshToken: getToken('refreshToken'),
      }
    )

    localStorage.setItem('accessToken', tokens.data.data.accessToken)
    localStorage.setItem('refreshToken', tokens.data.data.refreshToken)
    // functional/immutable-data
    // eslint-disable-next-line

    failedRequest.response.config.headers.Authorization = `Bearer ${getToken(
      'accessToken'
    )}`
    return Promise.resolve()
  } catch (error) {
    console.log(error)
  }
}

export const runAxiosAuthInterceptor = () => {
  createAuthRefreshInterceptor(axios, refreshAuthLogic)
}
