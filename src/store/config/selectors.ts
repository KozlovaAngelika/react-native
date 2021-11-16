import { RootState } from 'store';

export const selectCurrentLanguage = (state: RootState): string => {
  return state.appConfig.currentLanguage;
};
