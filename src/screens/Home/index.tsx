import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useStore } from 'react-redux';
import MovieTile from '../../components/MovieTile';
import SearchBar from '../../components/SearchBar';
import { searchMovies } from '../../redux/movies/actions';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const store = useStore();
  useEffect(() => {
    dispatch(searchMovies('ol'));
  }, [dispatch]);
  console.log(store.getState());
  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={setSearchValue} />
      <MovieTile
        title="Rick and Morty"
        imgSrc="https://images.ua.prom.st/1650079983_w640_h640_1650079983.jpg"
      />
    </View>
  );
};

export default Home;
