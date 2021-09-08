import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import Loader from 'components/Loader';
import { COLORS } from 'utils/constants';
import styles from './styles';

interface Props {
  title: string;
  imgSrc: string;
  isDeleteBtn: boolean;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc, isDeleteBtn }) => {
  const source = imgSrc ? { uri: imgSrc } : defaultImg;
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image
        source={source}
        placeholderStyle={{ backgroundColor: COLORS.GREY }}
        PlaceholderContent={<Loader />}
        resizeMode="contain"
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
