import Loader from 'components/Loader';
import Notice from 'components/Notice';
import React, { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTopMovies } from 'store/topMovies/actions';
import {
  selectError,
  selectLoadingStatus,
  selectTopMovies,
} from 'store/topMovies/selectors';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const TopMovies: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(selectLoadingStatus);
  const error: Error | null = useSelector(selectError);
  const errorMessage = t('error');
  const emptyRequest = t('emptyRequestNotice');
  const noResultsMessage = t('noResults');
  const data: Movie[] | null = useSelector(selectTopMovies);

  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile
      title={item.title}
      imgSrc={item.image}
      key={item.id}
      isDeleteBtn={false}
    />
  );

  useEffect(() => {
    dispatch(getTopMovies);
  }, []);

  const renderContent = (): ReactElement => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <Notice isError message={errorMessage} />;
    }
    if (data?.length === 0) {
      return <Notice isError={false} message={noResultsMessage} />;
    }
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.moviesContainer}
      />
    );
  };
  return <View>{renderContent()}</View>;
};

export default TopMovies;
