import { ref, readonly } from 'vue'
const userState = ref({})

/**
 * Return a readonly user state to prevent direct mutation
 */
export const getUser = () => readonly(userState)

/**
 * Set new user state
 */
export const setUser = data => (userState.value = data)

/**
 * Update user state value by the key passed
 */
export const updateUser = (key, value) => (userState.value[key] = value)

const readonlyUser = getUser()

export const useUser = () => {
  return {
    user: readonlyUser,
    setUser,
    updateUser,
  }
}

// Set initial user data
// setUser({
//   id: 1,
//   roles: [],
// })
