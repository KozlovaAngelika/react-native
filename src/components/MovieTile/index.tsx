import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import img from 'media/noImg.jpeg';
import Loader from 'components/Loader';

interface Props {
  title: string;
  imgSrc: string;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image
        source={
          imgSrc !== ''
            ? {
                uri: imgSrc,
              }
            : img
        }
        onLoadStart={() => {
          setIsLoadingImg(true);
        }}
        onLoadEnd={() => {
          setIsLoadingImg(false);
        }}
        resizeMode="contain"
      />
      {isLoadingImg ? <Loader /> : null}
    </Card>
  );
};

export default MovieTile;
