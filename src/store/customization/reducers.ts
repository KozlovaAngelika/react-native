import { CurrentLanguageState } from 'types/redux';
import { ChangeLanguageActions } from './types';
import * as types from './actionTypes';

const initialState = {
  currentLanguage: 'en',
};

const customizationAppReducer = (
  state: CurrentLanguageState = initialState,
  action: ChangeLanguageActions,
): CurrentLanguageState => {
  switch (action.type) {
    case types.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};
export default customizationAppReducer;
