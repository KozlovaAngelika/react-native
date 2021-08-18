import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import './utils/i18n/index';
import state from './redux';
import styles from './styles';

const App: React.FunctionComponent = () => (
  <Provider store={state}>
    <View style={styles.container}>
      <SearchBar value="" onChangeValue={() => {}} />
    </View>
  </Provider>
);

export default App;
