import './styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {Loading,Notify} from 'quasar'
// To be used on app.use(Quasar, { ... })
export default {
  config: {loading:{},Notify:{}},
  plugins: {Loading,Notify}
}