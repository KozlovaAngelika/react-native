import React from 'react';
import './utils/i18n/index';
import 'react-native-vector-icons';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
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
