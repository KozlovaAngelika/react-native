import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import './utils/i18n/index';
import 'react-native-vector-icons';
import Tabs from './routes';
import state from './redux';
import theme from './theme';

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Provider store={state}>
      <Tabs />
    </Provider>
  </ThemeProvider>
);

export default App;
