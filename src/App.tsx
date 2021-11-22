import React from 'react';
import './utils/i18n/index';
import 'react-native-vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Tabs from './routes';
import { persistedState, rootState } from './store';

const App: React.FunctionComponent = () => (
  <Provider store={rootState}>
    <PersistGate loading={null} persistor={persistedState}>
      <Tabs />
    </PersistGate>
  </Provider>
);

export default App;
