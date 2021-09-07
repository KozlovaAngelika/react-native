import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { View, FlatList, ListRenderItem } from 'react-native';
import MovieTile from '../../components/MovieTile';
import SearchBar from '../../components/SearchBar';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const data: Movie[] = useSelector((state: MovieState) => state.movies);
  const [searchValue, setSearchValue] = useState('');
  const [dataForDisplay, setDataForDisplay] = useState(data);
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} key={item.id} />
  );
  const searchMovie = debounce((value: string) => {
    const displayedData = data.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setDataForDisplay(displayedData);
  }, 300);
  const onChangeValue = useCallback((value: string): void => {
    setSearchValue(value);
    searchMovie(value);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={onChangeValue} />
      <FlatList
        data={dataForDisplay}
        renderItem={renderItem}
        style={styles.moviesContainer}
      />
    </View>
  );
};

export default Home;
