import React from 'react';
import { Provider } from 'react-redux';
import './utils/i18n/index';
import 'react-native-vector-icons';
import Tabs from './routes';
import { rootState } from './redux';

const App: React.FunctionComponent = () => (
  <Provider store={rootState}>
    <Tabs />
  </Provider>
);

export default App;
