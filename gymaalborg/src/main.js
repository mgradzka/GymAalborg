import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';


loadFonts()



const app = createApp(App)
app.use(VCalendar, {})

  app.use(vuetify)
  app.mount('#app')
