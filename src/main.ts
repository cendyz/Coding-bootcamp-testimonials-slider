import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Kurs from './Kurs.vue'

const app = createApp(App)

app.mount('#app')
app.component('app-kurs', Kurs)
