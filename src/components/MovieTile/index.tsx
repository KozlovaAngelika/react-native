import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies, isFavoriteMovie } from 'store/favorites/selectors';
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
  const isInFavorites = useSelector(isFavoriteMovie(data.id));
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const source = data.image ? { uri: data.image } : defaultImg;

  const toggleModal = useCallback((): void => {
    setIsVisible((isVisibleModal: boolean) => !isVisibleModal);
  }, []);

  const toggleIsFavorite = (): void => {
    if (isInFavorites) {
      dispatch(removeMovieFromFavorites(data.id));
    } else {
      dispatch(addMovieToFavorites(data));
    }
  };

  return (
    <TouchableOpacity onPress={toggleModal}>
      <Card containerStyle={styles.container}>
        <Card.Title style={styles.title} onPress={toggleModal}>
          {data.title}
        </Card.Title>
        <Card.Image
          source={source}
          placeholderStyle={{ backgroundColor: COLORS.WHITE }}
          PlaceholderContent={<Loader />}
          resizeMode="contain"
        />
        <Button
          icon={
            <Icon
              name="star"
              color={isInFavorites ? COLORS.YELLOW : COLORS.GREY}
            />
          }
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          onPress={toggleIsFavorite}
        />
        {isVisible && (
          <MovieInfo
            isVisible={isVisible}
            onClose={toggleModal}
            toggleIsFavorite={toggleIsFavorite}
            isInFavorites={isInFavorites}
            data={data}
          />
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default React.memo(MovieTile);
