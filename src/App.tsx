import React from 'react';
import './utils/i18n/index';
import 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';

const App: React.FunctionComponent = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
);
export default App;
