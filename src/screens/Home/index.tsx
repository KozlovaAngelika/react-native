import React, { useState } from 'react';
import { View } from 'react-native';
import MovieTile from '../../components/MovieTile';
import SearchBar from '../../components/SearchBar';

const Home: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View>
      <SearchBar value={searchValue} onChangeValue={setSearchValue} />
      <MovieTile
        title="Rick and Morty"
        imgSrc="https://images.ua.prom.st/1650079983_w640_h640_1650079983.jpg"
      />
    </View>
  );
};

export default Home;
