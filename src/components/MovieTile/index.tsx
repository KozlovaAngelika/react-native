import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import Loader from 'components/Loader';

interface Props {
  title: string;
  imgSrc: string;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const source = imgSrc ? { uri: imgSrc } : defaultImg;
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image
        source={source}
        onLoadStart={() => {
          setIsLoadingImg(true);
        }}
        onLoadEnd={() => {
          setIsLoadingImg(false);
        }}
        PlaceholderContent={<Loader />}
        resizeMode="contain"
      />
    </Card>
  );
};

export default MovieTile;
