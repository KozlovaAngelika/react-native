import { NativeModules } from 'react-native';
import { API_URL } from 'react-native-dotenv';
import { createStore, applyMiddleware, Action, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import api from '../utils/api';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const saga = createSagaMiddleware();

const addSaga = applyMiddleware(saga);

const composedEnhancers = composeWithDevTools(addSaga);

export const rootState = createStore(rootReducer, composedEnhancers);

export const persistedState = persistStore(rootState);

saga.run(rootSaga, api);
