import { RootState } from 'store/rootReducer';

const selectCurrentLanguage = (state: RootState): string => state.appConfig.currentLanguage;

export default selectCurrentLanguage;
