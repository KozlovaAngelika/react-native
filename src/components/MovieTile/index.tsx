import React, { useState } from 'react';
import { Button, Card, Icon } from 'react-native-elements';
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
      <Card.Image source={{ uri: data.image }} resizeMode="contain" />
      <MovieInfo isVisible={isVisible} onClose={toggleModal} data={data} />
      {isInFavorites ? (
        <Button
          icon={<Icon name="delete" />}
          buttonStyle={styles.removeBtn}
          containerStyle={styles.btnContainer}
          onPress={() => {}}
        />
      ) : null}
    </Card>
  );
};

export default MovieTile;
