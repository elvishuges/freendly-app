import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from "./router";
import store from  './store'
//import SocketIO from 'socket.io-client'; // "socket.io-client": "^2.0.4"
//import * as io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false


Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
}));

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
