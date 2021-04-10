import { SET_USER, CLEAR_USER } from './userTypes.js'

const initialState = {
  user: {
    id: 0,
    token: '',
    username: '',
    email: '',
  },
}

export default {
  [SET_USER](state, user) {
    state.user = user
  },
  [CLEAR_USER](state) {
    state.user = initialState.user
  },
}
