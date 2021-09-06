import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { selectMovies } from 'store/favorites/selectors';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const Favorites: React.FunctionComponent = () => {
  const data: Movie[] = useSelector(selectMovies);
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile
      title={item.title}
      imgSrc={item.image}
      isInFavorites
      key={item.id}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.moviesContainer}
      />
    </View>
  );
};

export default Favorites;
