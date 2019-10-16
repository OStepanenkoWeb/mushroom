import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import firebase from 'firebase/app'
import VueApexCharts from 'vue-apexcharts'
import NavbarComponent from './components/NavbarComponent'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
import { firebaseConfig } from '../firebase-config'

Vue.use(firestorePlugin)
Vue.component('apexchart', VueApexCharts)
Vue.component('NavbarComponent', NavbarComponent)

export const db = firebase.initializeApp(firebaseConfig).firestore()
export const firestore = firebase.firestore

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
