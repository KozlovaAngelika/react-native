import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import MovieTile from 'components/MovieTile';
import Notice from 'components/Notice';
import { selectMovies } from 'store/favorites/selectors';

const Favorites: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const data: Movie[] = useSelector(selectMovies);

  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => <MovieTile data={item} key={item.id} />;

  return (
    <View style={styles.container}>
      <LanguagePicker />
      {!data.length ? (
        <Notice isError={false} message={t('noFavorites')} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          style={styles.moviesContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Favorites;
