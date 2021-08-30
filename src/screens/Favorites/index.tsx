import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const Favorites: React.FunctionComponent = () => {
  const data: Movie[] = useSelector((state: MovieState) => state.movies);
  const keyExtractor = (item: Movie): string => item.id;
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile title={item.title} imgSrc={item.image} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.moviesContainer}
      />
    </SafeAreaView>
  );
};

export default Favorites;
