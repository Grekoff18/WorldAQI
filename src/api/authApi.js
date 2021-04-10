import api from './api'

const URLS = {
  signIn: 'http://localhost:3000/auth/signin',
  signUp: 'http://localhost:3000/auth/signup',
  forgot: 'http://localhost:3000/auth/forgot',
  fetchSecret: 'http://localhost:3000/auth/secret',
}

export const postUser = async user => {
  // check is signin method or signup
  const URL = user.isSignIn ? URLS.signIn : URLS.signUp
  const response = await api.post(URL, user.body)
  return response
}

export const userForgot = async user => {
  const response = await api.post(URLS.forgot, user)
  return response
}
