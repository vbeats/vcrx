import {createI18n} from 'vue-i18n'
import zhCNLang from './lang/zh-CN'
import enUSLang from './lang/en-US'

const messages = {
    'zh-CN': {
        ...zhCNLang,
    },
    'en-US': {
        ...enUSLang,
    },
}

const lang = 'zh-CN'

const i18n = createI18n({
    locale: lang,
    fallbackLocale: lang,
    legacy: false,
    messages,
})

export default i18n