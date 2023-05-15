/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import {createApp} from 'vue'

// Plugins
import {registerPlugins} from '@/plugins'
import {makeServer} from "@/mocks/mirageServer";

const app = createApp(App)
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    makeServer();
}

registerPlugins(app)

app.mount('#app')
