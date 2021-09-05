import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import { COLORS } from '../../utils/constants';
import MovieInfo from './MovieInfo';
import styles from './styles';

interface Props {
  data: Movie;
  isInFavorites: boolean;
}

const MovieTile: React.FC<Props> = ({ data, isInFavorites }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = (): void => {
    setIsVisible((isVisibleModal: boolean) => !isVisibleModal);
  };
  return (
    <Card>
      <Card.Title onPress={toggleModal}>{data.title}</Card.Title>
      <Card.Image
        source={{
          uri: data.image,
        }}
        resizeMode="contain"
      />
      <MovieInfo isVisible={isVisible} onClose={toggleModal} data={data} />
      {isInFavorites ? (
        <Button
          icon={{
            name: 'delete',
            size: 20,
            color: COLORS.LIGHT_GREY,
          }}
          buttonStyle={styles.removeBtn}
          containerStyle={styles.btnContainer}
          onPress={() => {}}
        />
      ) : null}
    </Card>
  );
};

export default MovieTile;
