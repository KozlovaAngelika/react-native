import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import MovieInfo from './MovieInfo';

interface Props {
  data: Movie;
}

const MovieTile: React.FC<Props> = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = (): void => {
    setIsModalVisible(false);
  };
  const showModal = (): void => {
    setIsModalVisible(true);
  };
  return (
    <Card>
      <Card.Title onPress={showModal}>{data.title}</Card.Title>
      <Card.Image
        source={{
          uri: data.image,
        }}
        resizeMode="contain"
      />
      <MovieInfo
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        data={data}
      />
    </Card>
  );
};

export default MovieTile;
