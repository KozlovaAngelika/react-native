import { SET_CURRENT_LANGUAGE } from './actionTypes';

export interface SetCurrentLanguage {
  type: typeof SET_CURRENT_LANGUAGE;
  payload: string;
}

export type ChangeLanguageActions = SetCurrentLanguage;
