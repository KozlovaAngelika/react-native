import React from 'react';
import { Card } from 'react-native-elements';

interface Props {
  title: string;
  imgSrc: string;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc }) => (
  <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Image
      source={{
        uri: imgSrc,
      }}
    />
  </Card>
);

export default React.memo(MovieTile);
