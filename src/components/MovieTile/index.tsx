import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from 'store/favorites/selectors';
import Loader from 'components/Loader';
import {
  addMovieToFavorites,
  removeMovieFromFavorites,
} from 'store/favorites/actions';
import { COLORS } from '../../utils/constants';
import styles from './styles';

interface Props {
  data: Movie;
}
const MovieTile: React.FC<Props> = ({ data }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  const favoritesMovies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const findMovieInFavorites = (): void => {
    const isFavorite = favoritesMovies.some((movie) => movie.id === data.id);
    setIsInFavorites(isFavorite);
  };
  const toggleIsFavorite = (): void => {
    if (isInFavorites) {
      dispatch(removeMovieFromFavorites(data.id));
    } else {
      dispatch(addMovieToFavorites(data));
    }
  };
  useEffect(findMovieInFavorites);
  const source = data.image ? { uri: data.image } : defaultImg;

  return (
    <Card containerStyle={styles.container}>
      <Card.Title style={styles.title}>{data.title}</Card.Title>
      <Card.Image
        source={source}
        placeholderStyle={{ backgroundColor: COLORS.GREY }}
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
        onPress={toggleIsFavorite}
      />
    </Card>
  );
};

export default MovieTile;
