import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import MovieInfo from './MovieInfo';

interface Props {
  data: Movie;
}

const MovieTile: React.FC<Props> = ({ data }) => {
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
    </Card>
  );
};

export default MovieTile;
