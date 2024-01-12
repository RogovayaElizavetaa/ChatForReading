import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import './style.css'

const app = createApp(App);

// components.forEach(component => {
//     app.component(component.name, component)
// })

app.use(router).mount('#app')
