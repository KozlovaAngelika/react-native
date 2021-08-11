import 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

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
