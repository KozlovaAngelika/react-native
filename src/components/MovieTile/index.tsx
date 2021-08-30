import React from 'react';
import { Button, Card } from 'react-native-elements';
import { COLORS } from '../../utils/constants';
import styles from './styles';

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
      resizeMode="contain"
    />
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
  </Card>
);

export default MovieTile;
