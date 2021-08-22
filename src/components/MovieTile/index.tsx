import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import MovieInfo from './MovieInfo';
import styles from './MovieInfo/styles';

interface Props {
  title: string;
  imgSrc: string;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const closeModal = (): void => {
    setIsModalVisible(false);
  };
  const showModal = (): void => {
    setIsModalVisible(true);
  };
  return (
    <Card>
      <Card.Title onPress={showModal}>{title}</Card.Title>
      <Card.Image
        source={{
          uri: imgSrc,
        }}
        resizeMode="contain"
      />
      <MovieInfo isModalVisible={isModalVisible} closeModal={closeModal} />
    </Card>
  );
};

export default MovieTile;
