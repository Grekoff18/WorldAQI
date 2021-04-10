import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerBaseComponents, loadPlugins } from '@/helpers'
import './styles/tailwind.css'
import { runAxiosAuthInterceptor } from './api/helpers/axios-auth-interceptor'

// Export the app, so it can be accessed by plugins
export const app = createApp(App)

runAxiosAuthInterceptor()

/**
 * Specify plugins to load from the /plugins directory
 * Pass file names without any extension like so
 *
 * @example
 *
 * loadPlugins(['vue-fontawesome'])
 */
loadPlugins([])

/**
 * Automatically imports and registers base components
 * Make sure you have at least one Base components in components/base directory
 */
registerBaseComponents(app)

app
  .use(store)
  .use(router)
  .mount('#app')
