import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCQq2exGHKVammkwi3jtJl09FNNe-tgNEY",
  authDomain: "turaev-e1157.firebaseapp.com",
  databaseURL: "https://turaev-e1157.firebaseio.com",
  projectId: "turaev-e1157",
  storageBucket: "turaev-e1157.appspot.com",
  messagingSenderId: "992475360052",
  appId: "1:992475360052:web:8f23ddea12c3756b52d361"
};

export const db = firebase.initializeApp(firebaseConfig).firestore()

Vue.use(
	firestorePlugin
)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')