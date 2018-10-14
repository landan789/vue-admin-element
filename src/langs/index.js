import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLang from './../langs/en'
import zhLang from './../langs/zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLang,
    ...elementEnLocale
  },
  zh: {
    ...zhLang,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || 'en',
  // set locale messages
  messages
})

export default i18n
