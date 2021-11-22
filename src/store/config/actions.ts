import SET_CURRENT_LANGUAGE from './actionTypes';

const changeLanguage = (lang: string): SetCurrentLanguage => ({
  type: SET_CURRENT_LANGUAGE,
  payload: lang,
});

export default changeLanguage;
