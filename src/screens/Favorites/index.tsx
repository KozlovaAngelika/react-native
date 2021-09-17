import Notice from 'components/Notice';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { selectMovies } from 'store/favorites/selectors';
import MovieTile from 'components/MovieTile';
import styles from './styles';

const Favorites: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const data: Movie[] = useSelector(selectMovies);

  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} key={item.id} />
  );

  const renderContent = (): ReactElement => {
    if (!data.length) {
      return <Notice isError={false} message={t('noFavorites')} />;
    }
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.moviesContainer}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  return <View style={styles.container}>{renderContent()}</View>;
};
export default Favorites;
