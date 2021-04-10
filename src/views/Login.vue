<template>
  hi you need to signin
  <button
    @click="postUser(user)"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    SignIn
  </button>
  <div>
    <router-link to="Forgot">Forgot password</router-link>
    <br />
    <router-link to="Signup">Signup</router-link>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
//import { mapActions } from 'vuex'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    /* here u need implement data from form*/
    const user = reactive({
      password: '2563716',
      email: 'vlad@mail.ru',
    })
    const isSignIn = ref(true)
    const postUser = user =>
      store.dispatch('user/authPost', { body: user, isSignIn: isSignIn })

    return {
      user,
      postUser,
    }
  },
  /*
  computed: {
    endpointBody() {
      return JSON.stringify(this.user)
    },
  },
  methods: {
    ...mapActions({
      postUser: 'user/authPost',
    }),
  },
  mounted() {
    console.log(this.user)
    this.postUser({ body: this.endpointBody, isSignIn: true })
  },*/
}
</script>
