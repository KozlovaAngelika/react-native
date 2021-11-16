import { SET_CURRENT_LANGUAGE } from './actionTypes';

export interface SetCurrentLanguageAction {
  type: typeof SET_CURRENT_LANGUAGE;
  payload: string;
}

export type ChangeLanguageActions = SetCurrentLanguageAction;
