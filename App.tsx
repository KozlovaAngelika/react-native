import React from 'react';
import {
  View,
} from 'react-native';
import MovieTile from './ src/components/MovieTile';

const App: React.FC = () => (
  <View>
    <MovieTile title="Rick and Morty" imgSrc="https://images.ua.prom.st/1650079983_w640_h640_1650079983.jpg" />
  </View>
);

export default App;
