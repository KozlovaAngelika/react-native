import React, { useState, useCallback, useEffect } from 'react';
import { Button, Card, Icon } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from 'store/favorites/selectors';
import Loader from 'components/Loader';
import {
  addMovieToFavorites,
  removeMovieFromFavorites,
} from 'store/favorites/actions';
import { COLORS } from 'utils/constants';
import MovieInfo from './MovieInfo';
import styles from './styles';

interface Props {
  data: Movie;
}
const MovieTile: React.FC<Props> = ({ data }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  const favoritesMovies = useSelector(selectMovies);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const source = data.image ? { uri: data.image } : defaultImg;

  const toggleModal = useCallback((): void => {
    setIsVisible((isVisibleModal: boolean) => !isVisibleModal);
  }, []);

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

  return (
    <Card containerStyle={styles.container}>
      <Card.Title style={styles.title} onPress={toggleModal} testID="title">
        {data.title}
      </Card.Title>
      <Card.Image
        source={source}
        placeholderStyle={{ backgroundColor: COLORS.GREY }}
        PlaceholderContent={<Loader />}
        resizeMode="contain"
        testID="cardImage"
      />
      <MovieInfo
        isVisible={isVisible}
        onClose={toggleModal}
        data={data}
        isInFavorites={isInFavorites}
        toggleIsFavorite={toggleIsFavorite}
      />
      <Button
        icon={
          <Icon
            name="star"
            color={isInFavorites ? COLORS.YELLOW : COLORS.GREY}
            testID="btnToggleFavoritesIcon"
          />
        }
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={toggleIsFavorite}
      />
    </Card>
  );
};

export default React.memo(MovieTile);
