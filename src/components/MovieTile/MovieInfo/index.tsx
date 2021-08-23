import React from 'react';
import { Text, View } from 'react-native';
import { Button, Overlay, Card } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { COLORS } from '../../../utils/constants';
import '../../../utils/i18n';

interface Props {
  isModalVisible: boolean;
  closeModal: () => void;
  data: Movie;
}

const MovieInfo: React.FC<Props> = ({ isModalVisible, closeModal, data }) => {
  const { t } = useTranslation();
  return (
    <Overlay
      isVisible={isModalVisible}
      fullScreen
      overlayStyle={styles.overlay}
    >
      <Button
        icon={{
          name: 'close',
          size: 20,
          color: `${COLORS.GREY}`,
        }}
        buttonStyle={styles.closeBtn}
        containerStyle={styles.btnContainer}
        onPress={closeModal}
      />
      <Card containerStyle={styles.card}>
        <Card.Title>{data.title}</Card.Title>
        <Text style={styles.description}>
          The idea with React Native Elements is more about component structure
          than actual design.(найти откуда вытащить описание фильма)
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>{t('rating')}</Text>
          <Text>{data.imDbRating}</Text>
        </View>
        <Card.Image
          source={{
            uri: data.image,
          }}
          resizeMode="contain"
        />
      </Card>
      <Button title={t('addtofavorites')} buttonStyle={styles.addBtn} />
    </Overlay>
  );
};

export default MovieInfo;
