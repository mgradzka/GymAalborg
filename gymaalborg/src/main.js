import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';


loadFonts()



const app = createApp(App)
app.use(VCalendar, {})

  app.mount('#app')
