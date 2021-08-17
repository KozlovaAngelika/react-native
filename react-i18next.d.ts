import 'react-i18next';
import en from './src/utils/i18n/locales/en.json';
import ru from './src/utils/i18n/locales/ru.json';

declare module 'react-i18next' {
  interface Resources {
    en: typeof en;
    ru: typeof ru;
  }
}
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      ru: typeof ru;
    };
  }
}
