import { ChangeLanguageActions } from './types';
import * as types from './actionTypes';

const initialState = 'en';

const changeLanguageReducer = (
  state: CurrentLanguageState = initialState,
  action: ChangeLanguageActions,
): CurrentLanguageState => {
  switch (action.type) {
    case types.SET_CURRENT_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
export default changeLanguageReducer;
