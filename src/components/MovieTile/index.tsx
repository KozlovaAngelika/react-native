import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import { useSelector } from 'react-redux';
import { selectMovies } from 'store/favorites/selectors';
import Loader from 'components/Loader';
import { COLORS } from '../../utils/constants';
import styles from './styles';

interface Props {
  data: Movie;
}

const MovieTile: React.FC<Props> = ({ data }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const favoritesMovies = useSelector(selectMovies);
  const findMovieInFavorites = (): any => {
    const isFavorite = favoritesMovies.some((movie) => movie.id === data.id);
    setIsInFavorites(isFavorite);
  };
  const source = data.image ? { uri: data.image } : defaultImg;
  return (
    <Card containerStyle={styles.container}>
      <Card.Title style={styles.title}>{data.title}</Card.Title>
      <Card.Image
        source={source}
        onLoadStart={() => {
          setIsLoadingImg(true);
        }}
        onLoadEnd={() => {
          setIsLoadingImg(false);
        }}
        PlaceholderContent={<Loader />}
        resizeMode="contain"
      />
      <Button
        icon={{
          name: 'star',
          size: 25,
          color: isInFavorites ? COLORS.YELLOW : COLORS.GREY,
        }}
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={() => {}}
      />
    </Card>
  );
};

export default MovieTile;
