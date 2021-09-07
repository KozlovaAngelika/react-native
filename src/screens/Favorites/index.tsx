import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const Favorites: React.FunctionComponent = () => {
  const data: Movie[] = useSelector((state: MovieState) => state.movies);
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} isInFavorites={false} key={item.id} />
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
