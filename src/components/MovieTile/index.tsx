import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import Loader from 'components/Loader';
import { COLORS } from '../../utils/constants';
import styles from './styles';

interface Props {
  title: string;
  imgSrc: string;
  isInFavorites: boolean;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc, isInFavorites }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const source = imgSrc ? { uri: imgSrc } : defaultImg;
  return (
    <Card containerStyle={styles.container}>
      <Card.Title style={styles.title}>{title}</Card.Title>
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
      <Button
        icon={{
          name: 'star',
          size: 25,
          color: !isInFavorites ? COLORS.YELLOW : COLORS.GREY,
        }}
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={() => {}}
      />
    </Card>
  );
};

export default MovieTile;
