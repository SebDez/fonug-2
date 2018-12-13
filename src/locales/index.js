import Vue from 'vue'
import VueI18n from 'vue-i18n'

import fr from './fr.json'
import en from './en.json'

Vue.config.productionTip = false
Vue.use(VueI18n)

export const messages = {
  fr,
  en
}

const dateTimeFormats = {
  'fr': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

const numberFormats = {
  'fr': {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
    }
  }
}

export default new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  dateTimeFormats,
  numberFormats,
  messages
})
