/* eslint-disable import/prefer-default-export */
import { RootState } from 'store';

export const currentLanguage = (state: RootState): string => {
  return state.customizationApp.currentLanguage;
};
