import React, { ReactElement, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';
import { View, FlatList, ListRenderItem } from 'react-native';
import MovieTile from 'components/MovieTile';
import SearchBar from 'components/SearchBar';
import {
  selectError,
  selectLoadingStatus,
  selectMovies,
} from 'store/movies/selectors';
import Loader from 'components/Loader';
import { clearSearchResults, searchMovies } from 'store/movies/actions';
import Notice from 'components/Notice';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data: Movie[] | null = useSelector(selectMovies);
  const isLoading: boolean = useSelector(selectLoadingStatus);
  const error: Error | null = useSelector(selectError);
  const [searchValue, setSearchValue] = useState('');
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} key={item.id} isInFavorites={false} />
  );
  const searchMovie = useCallback(
    debounce((value: string) => {
      if (!value) {
        dispatch(clearSearchResults());
        return;
      }
      dispatch(searchMovies(value));
    }, 300),
    [],
  );
  const onChangeValue = useCallback((value: string): void => {
    setSearchValue(value);
    searchMovie(value.trim());
  }, []);
  const renderContent = (): ReactElement => {
    if (!searchValue.trim()) {
      return <Notice message={t('emptyRequestNotice')} />;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <Notice isError message={t('error')} />;
    }
    if (data?.length === 0) {
      return <Notice message={t('noResults')} />;
    }
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
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
