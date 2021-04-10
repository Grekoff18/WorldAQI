<template>
  <div>
    <p>FORGOT</p>
    <br />
    <button
      @click="postUser(user)"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Forgot
    </button>
  </div>
  <br />
  <router-link to="Login">Signin</router-link>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    /* here u need implement data from form*/
    /* also task for Vlad paassword protection */
    const id = computed(() => store.state.user.user.id)

    const user = reactive({
      password: '123345',
      id: id.value,
    })

    const postUser = () => store.dispatch('user/forgotPassword', user)

    return {
      user,
      postUser,
    }
  },
}
</script>

<style module></style>
