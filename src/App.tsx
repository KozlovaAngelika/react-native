import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import MovieTile from './components/MovieTile';
import SearchBar from './components/SearchBar';
import './utils/i18n/index';
import state from './redux';
import styles from './styles';

const App: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Provider store={state}>
      <View style={styles.container}>
        <SearchBar value={searchValue} onChangeValue={setSearchValue} />
      </View>
      <MovieTile
        title="Rick and Morty"
        imgSrc="https://images.ua.prom.st/1650079983_w640_h640_1650079983.jpg"
      />
    </Provider>
  );
};
export default App;
