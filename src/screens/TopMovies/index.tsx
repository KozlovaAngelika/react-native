import Loader from 'components/Loader';
import Notice from 'components/Notice';
import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTopMovies } from 'store/topMovies/actions';
import {
  selectError,
  selectLoadingStatus,
  selectTopMovies,
} from 'store/topMovies/selectors';
import MovieTile from 'components/MovieTile';
import styles from './styles';

const TopMovies: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(selectLoadingStatus);
  const error: Error | null = useSelector(selectError);
  const data: Movie[] = useSelector(selectTopMovies);

  useEffect(() => {
    if (!data.length) {
      dispatch(getTopMovies());
    }
  }, []);

  const onRefresh = (): void => {
    dispatch(getTopMovies());
  };
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} key={item.id} />
  );

  const renderContent = (): ReactElement => {
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
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
        onRefresh={onRefresh}
      />
    );
  };
  return <View style={styles.container}>{renderContent()}</View>;
};

export default TopMovies;
