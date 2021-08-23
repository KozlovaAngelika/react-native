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
  // data: Movie[];
}

const MovieInfo: React.FC<Props> = ({ isModalVisible, closeModal }) => {
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
        <Card.Title>Title</Card.Title>
        <Text style={styles.description}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>{t('rating')}</Text>
          <Text>9.4</Text>
        </View>
        <Card.Image
          source={{
            uri:
              'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/146b1b20-347b-4b6a-98c8-fdc2c75495cb/300x450',
          }}
          resizeMode="contain"
        />
      </Card>
      <Button title={t('addtofavorites')} buttonStyle={styles.addBtn} />
    </Overlay>
  );
};

export default MovieInfo;
