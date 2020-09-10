import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from "./router";
import store from  './store'
import interceptorsSetup from './helpers/freendlyInterceptor'
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false
interceptorsSetup()

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
