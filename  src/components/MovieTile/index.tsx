import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import styles from './styles';

interface MovieTileProps {
  title: string,
  imgSrc: string,
}

const MovieTile: React.FC <MovieTileProps> = ({ title, imgSrc }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.poster}
      source={{
        uri: imgSrc,
      }}
    />
  </View>
);

export default MovieTile;
