import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import MovieTile from '../../components/MovieTile';
import SearchBar from '../../components/SearchBar';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const DATA: Movie[] = useSelector((state: MovieState) => state.movies);
  const [searchValue, setSearchValue] = useState('');
  const [dataForDisplay, setDataForDisplay] = useState(DATA);
  const keyExtractor = (item: Movie): string => item.id;
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile title={item.title} imgSrc={item.image} />
  );
  const searchMovie = debounce((value: string) => {
    const data = DATA.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setDataForDisplay(data);
  }, 300);
  const onChangeValue = (value: string): void => {
    setSearchValue(value);
    searchMovie(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={onChangeValue} />
      <FlatList
        data={dataForDisplay}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.moviesContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
