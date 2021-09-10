import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import './utils/i18n/index';
import 'react-native-vector-icons';
import { rootState } from 'store';
import Tabs from './routes';
import theme from './theme';

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Provider store={rootState}>
      <Tabs />
    </Provider>
  </ThemeProvider>
);

export default App;
