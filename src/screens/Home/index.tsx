/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-else-return */
import React, { useState, useCallback, useMemo } from 'react';
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
import { clearSearchResults, searchMovies } from 'store/movies/actions';
import Content from 'components/Content';
import styles from './styles';

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data: Movie[] | null = useSelector(selectMovies);
  const isLoading: boolean = useSelector(selectLoadingStatus);
  const error: Error | null = useSelector(selectError);
  const [searchValue, setSearchValue] = useState('');

  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} key={item.id} />
  );

  const message = useMemo(() => {
    if (!searchValue.trim()) {
      return t('emptyRequestNotice');
    } else if (error) {
      return t('error');
    } else if (data?.length === 0) {
      return t('noResults');
    } else {
      return '';
    }
  }, [error, data]);

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

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={onChangeValue} />
      <View style={styles.container}>
        <Content isLoading={isLoading} message={message} error={!!error}>
          <FlatList
            data={data}
            renderItem={renderItem}
            style={styles.moviesContainer}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </View>
    </View>
  );
};

export default Home;
