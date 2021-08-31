import React from 'react';
import { Button, Card } from 'react-native-elements';
import { COLORS } from '../../utils/constants';
import styles from './styles';

interface Props {
  title: string;
  imgSrc: string;
  isDeleteBtn: boolean;
}

const MovieTile: React.FC<Props> = ({ title, imgSrc, isDeleteBtn }) => (
  <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Image
      source={{
        uri: imgSrc,
      }}
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

export default MovieTile;
