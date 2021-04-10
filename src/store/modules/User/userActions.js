import * as userTypes from './userTypes.js'
import { postUser, userForgot, userlogout } from '@/api/authApi'
import jwtDecode from 'jwt-decode'
import { SET_USER, CLEAR_USER } from './../User/userTypes'

export default {
  async authPost({ commit }, { ...data }) {
    try {
      const user = {
        body: Object.assign({}, data.body),
        isSignIn: data.isSignIn._value,
      }
      const response = await postUser(user)
      //const decoded = jwtDecode(response.accessToken)
      commit(SET_USER, response.data.user)

      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    } catch (err) {
      console.log(err)
    }
  },
  async authLogout({ commit, dispatch, state }) {
    try {
      commit(CLEAR_USER)
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    } catch (err) {
      console.log(err)
    }
  },
  async forgotPassword({ commit }, { ...data }) {
    try {
      const response = await userForgot(data)
    } catch (err) {
      console.log(err)
    }
  },
}
