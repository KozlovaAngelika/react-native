import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import defaultImg from 'media/defaultImg.png';
import Loader from 'components/Loader';
import { COLORS } from 'utils/constants';
import MovieInfo from './MovieInfo';
import styles from './styles';

interface Props {
  data: Movie;
  isInFavorites: boolean;
}
const MovieTile: React.FC<Props> = ({ data, isInFavorites }) => {
  const [isVisible, setIsVisible] = useState(false);
  const source = data.image ? { uri: data.image } : defaultImg;
  const toggleModal = useCallback((): void => {
    setIsVisible((isVisibleModal: boolean) => !isVisibleModal);
  }, []);
  return (
    <TouchableOpacity onPress={toggleModal}>
      <Card>
        <Card.Title>{data.title}</Card.Title>
        <Card.Image
          source={source}
          placeholderStyle={{ backgroundColor: COLORS.GREY }}
          PlaceholderContent={<Loader />}
          resizeMode="contain"
        />
        <MovieInfo isVisible={isVisible} onClose={toggleModal} data={data} />
        {isInFavorites ? (
          <Button
            icon={<Icon name="delete" />}
            buttonStyle={styles.removeBtn}
            containerStyle={styles.btnContainer}
            onPress={() => {}}
          />
        ) : null}
      </Card>
    </TouchableOpacity>
  );
};

export default React.memo(MovieTile);
