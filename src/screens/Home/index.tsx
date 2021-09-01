import React, { ReactElement, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { View, FlatList, ListRenderItem } from 'react-native';
import MovieTile from 'components/MovieTile';
import SearchBar from 'components/SearchBar';
import {
  selectError,
  selectLoadingStatus,
  selectMovies,
} from 'store/movies/selectors';
import EmptyRequestNotice from 'components/EmptyRequestNotice';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { clearSearchResults, searchMovies } from 'store/movies/actions';
import NoResultsMessage from 'components/NoResultsMessage/NoResultsMessage';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const data: Movie[] = useSelector(selectMovies);
  const isLoading: boolean = useSelector(selectLoadingStatus);
  const error: Error | null = useSelector(selectError);
  const [searchValue, setSearchValue] = useState('');
  const keyExtractor = (item: Movie): string => item.id;
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile title={item.title} imgSrc={item.image} />
  );
  const dispatch = useDispatch();
  const searchMovie = useCallback(
    debounce((value: string) => {
      if (value === '') {
        dispatch(clearSearchResults());
        return;
      }
      dispatch(searchMovies(value));
    }, 300),
    [],
  );
  const onChangeValue = (value: string): void => {
    setSearchValue(value);
    searchMovie(value);
  };
  const renderContent = (): ReactElement => {
    if (searchValue.length < 1) {
      return <EmptyRequestNotice />;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (error !== null) {
      return <ErrorMessage />;
    }
    if (data.length === 0) {
      return <NoResultsMessage />;
    }
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.moviesContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={onChangeValue} />
      <View style={styles.container}>{renderContent()}</View>
    </View>
  );
};

export default Home;
