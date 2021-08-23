import React from 'react';
import { Provider } from 'react-redux';
import './utils/i18n/index';
import 'react-native-vector-icons';
import Tabs from './routes';
import state from './redux';

const App: React.FunctionComponent = () => (
  <Provider store={state}>
    <Tabs />
  </Provider>
);

export default App;
