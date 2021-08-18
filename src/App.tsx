import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import './utils/i18n/index';
import state from './redux';
import styles from './styles';

const App: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Provider store={state}>
      <View style={styles.container}>
        <SearchBar
          value={searchValue}
          onChangeValue={(value) => {
            setSearchValue(value);
          }}
        />
      </View>
    </Provider>
  );
};
export default App;
