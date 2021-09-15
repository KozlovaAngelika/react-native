/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import React from 'react';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: async () => await new Promise(() => {}),
    },
  }),
}));
