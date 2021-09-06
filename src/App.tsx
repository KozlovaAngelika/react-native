import React from 'react';
import { Provider } from 'react-redux';
import './utils/i18n/index';
import 'react-native-vector-icons';
import { PersistGate } from 'redux-persist/integration/react';
import Tabs from './routes';
import { rootState, persistedState } from './store';

const App: React.FunctionComponent = () => (
  <Provider store={rootState}>
    <PersistGate loading={null} persistor={persistedState}>
      <Tabs />
    </PersistGate>
  </Provider>
);

export default App;
