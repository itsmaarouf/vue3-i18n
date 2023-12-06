import { createI18n } from "vue-i18n";
import pluralRules from "./rules/pluralization"
import numberFormats from "./rules/numbers.js"
import datetimeFormats from "./rules/datetime.js"
import en from './locales/en.json'
import de from './locales/de.json'


export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    globalInjection: true,
    legacy: false,
    messages: { en, de },
    pluralRules,
    numberFormats,
    datetimeFormats
})