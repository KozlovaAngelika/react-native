import React from 'react';
import { Card } from 'react-native-elements';

interface MovieTileProps {
  title: string;
  imgSrc: string;
}

const MovieTile: React.FC<MovieTileProps> = ({ title, imgSrc }) => (
  <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Card.Image
      source={{
        uri: imgSrc,
      }}
    />
  </Card>
);

export default MovieTile;
