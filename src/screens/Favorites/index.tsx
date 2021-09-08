import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const Favorites: React.FunctionComponent = () => {
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile data={item} isInFavorites={false} key={item.id} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={null}
        renderItem={renderItem}
        style={styles.moviesContainer}
      />
    </View>
  );
};

export default Favorites;
