import { RootState } from 'store';

const selectCurrentLanguage = (state: RootState): string => state.appConfig.currentLanguage;

export default selectCurrentLanguage;
