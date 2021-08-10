import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });
