<template>
  <div id="app" class="bg-gray-100">
    <GlobalSpinnerProvider>
      <Layout>
        <div id="nav"></div>
        <router-view />
      </Layout>
    </GlobalSpinnerProvider>
  </div>
</template>
<script>
import Layout from '@/layout/Layout'
import GlobalSpinnerProvider from '@/components/common/spinner/GlobalSpinnerProvider.vue'
import { setUser } from '@/services/stateful/userService'

/**
 * Set user name for Managing State / Stateful Services example
 * need to implemet for auth
 */
setUser({
  name: 'Vlad',
})

export default {
  components: {
    Layout,
    GlobalSpinnerProvider,
  },
}
</script>
<style lang="scss"  src="@/styles/index.scss">
</style>
