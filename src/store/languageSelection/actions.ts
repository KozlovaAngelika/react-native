/* eslint-disable import/prefer-default-export */
import { RootThunkAction } from 'store';
import * as types from './actionTypes';
import { SetCurrentLanguage } from './types';

export const changeLanguage = (lang: string): SetCurrentLanguage => ({
  type: types.SET_CURRENT_LANGUAGE,
  payload: lang,
});
