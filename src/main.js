import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueBraintree from 'vue-braintree'
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL ='https://tabcash.vercel.app'

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(VueAxios, axios)
    .use(createPinia())
    .use(router)
    .use(VueBraintree)
    .mount('#app')
