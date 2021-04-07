import { reactive } from 'vue'

const initialState = {
  user: null,
}
// Vue.observable in Vue 2
const state = reactive(initialState)

// An object to spread on Vue computed instance
export const userComputed = {
  user: {
    get() {
      return state.user
    },
  },
}

// User setter method
export const setUser = user => (state.user = user)
