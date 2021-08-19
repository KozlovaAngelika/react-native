import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import './utils/i18n/index';
import 'react-native-vector-icons';
import Tabs from './components/Tabs';
import state from './redux';

const App: React.FunctionComponent = () => (
  <Provider store={state}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  </Provider>
);

export default App;
