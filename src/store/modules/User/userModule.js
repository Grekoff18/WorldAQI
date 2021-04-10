import getters from './userGetters.js'
import actions from './userActions.js'
import mutations from './userMutations.js'

const state = {
  user: {
    id: 0,
    token: '',
    username: 'Vlad',
    email: '',
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
