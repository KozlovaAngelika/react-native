import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import MovieTile from '../../components/MovieTile';
import styles from './styles';

const TopMovies: React.FunctionComponent = () => {
  const data: Movie[] = useSelector((state: MovieState) => state.movies);
  const renderItem: ListRenderItem<Movie> = ({ item }): React.ReactElement => (
    <MovieTile title={item.title} imgSrc={item.image} key={item.id} />
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

export default TopMovies;
