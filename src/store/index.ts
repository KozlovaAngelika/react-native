import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { NativeModules } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import api from '../utils/api';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const saga = createSagaMiddleware();

const addSaga = applyMiddleware(saga);

const composedEnhancers = composeWithDevTools(addSaga);

export const rootState = createStore(rootReducer, composedEnhancers);

export const persistedState = persistStore(rootState);

saga.run(rootSaga, api);
