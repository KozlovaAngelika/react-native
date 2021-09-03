import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import { COLORS } from '../../utils/constants';
import MovieInfo from './MovieInfo';
import styles from './styles';

interface Props {
  data: Movie;
  isDeleteBtn: boolean;
}

const MovieTile: React.FC<Props> = ({ data, isDeleteBtn }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = (isVisibleModal: boolean): void => {
    setIsVisible(!isVisibleModal);
  };
  return (
    <Card>
      <Card.Title
        onPress={() => {
          toggleModal(isVisible);
        }}
      >
        {data.title}
      </Card.Title>
      <Card.Image
        source={{
          uri: data.image,
        }}
        resizeMode="contain"
      />
      <MovieInfo
        isVisible={isVisible}
        onClose={() => {
          toggleModal(isVisible);
        }}
        data={data}
      />
      {isDeleteBtn ? (
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
