import SET_CURRENT_LANGUAGE from './actionTypes';
import { ConfigAppActions } from './types';

const initialState = {
  currentLanguage: 'en',
};

const appConfigReducer = (state: ConfigAppState = initialState, action: ConfigAppActions): ConfigAppState => {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default appConfigReducer;
