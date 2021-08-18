import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import MovieTile from './components/MovieTile';
import styles from './styles';
import './utils/i18n/index';
import state from './redux';

const App: React.FunctionComponent = () => (
  <Provider store={state}>
    <View style={styles.container}>
      <MovieTile
        title="Rick and Morty"
        imgSrc="https://images.ua.prom.st/1650079983_w640_h640_1650079983.jpg"
      />
    </View>
  </Provider>
);

export default App;
