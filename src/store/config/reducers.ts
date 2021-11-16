import { ConfigAppState } from 'types/redux';
import { ConfigAppActions } from './types';
import * as types from './actionTypes';

const initialState = {
  currentLanguage: 'en',
};

const appConfigReducer = (
  state: ConfigAppState = initialState,
  action: ConfigAppActions,
): ConfigAppState => {
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
export default appConfigReducer;
