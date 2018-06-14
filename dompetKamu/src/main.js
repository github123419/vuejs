// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './utils/store'
import storage from '@/utils/storage'
Vue.prototype.$storage=storage;

//i8n
import i18n from '@/i18n/i18n'
// form validate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/common.css'
import $jq from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
