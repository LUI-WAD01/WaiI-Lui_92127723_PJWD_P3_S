import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Creates an application instance.
const app = createApp(App)
// Apply the routes to our application.
app.use(router)
// Mounts the application instance in a container element.
app.mount('#app')
