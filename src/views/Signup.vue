<template>
  <div>
    <p>SIGNUP</p>
    <br />
    <button
      @click="postUser(user)"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      SignUp
    </button>
  </div>
  <br />
  <router-link to="Login">Signin</router-link>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    /* here u need implement data from form*/
    /* also task for Vlad paassword protection */

    const user = reactive({
      name: 'Vlad',
      surname: 'Chichuk',
      email: 'vlad@mail.ru',
      password: 123321,
    })
    const isSignIn = ref(false)
    const postUser = user =>
      store.dispatch('user/authPost', { body: user, isSignIn: isSignIn })

    return {
      user,
      postUser,
    }
  },
}
</script>

<style module></style>
