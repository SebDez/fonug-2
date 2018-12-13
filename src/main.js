// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import Router from 'vue-router'
import moment from 'moment'

import App from '@/App'
import i18n from '@/locales'
import store from '@/store'
import router from '@/routes'
import momentLocale from '@/locales/moment.json'

Vue.config.productionTip = false

// Moment
moment.locale(i18n.locale, {
  months: momentLocale[i18n.locale] ? momentLocale[i18n.locale].months : undefined,
  monthsShort: momentLocale[i18n.locale] ? momentLocale[i18n.locale].monthsShort : undefined
})

// Router
Vue.use(Router)

// Vuetify
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  el: '#app',
  router,
  render: h => h(App)
})
