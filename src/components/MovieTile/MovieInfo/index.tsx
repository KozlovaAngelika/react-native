import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { COLORS } from '../../../utils/constants';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  data: Movie;
}

const MovieInfo: React.FC<Props> = ({ isVisible, onClose, data }) => {
  const { t } = useTranslation();
  return (
    <Overlay isVisible={isVisible} fullScreen overlayStyle={styles.overlay}>
      <View style={styles.btnContainer}>
        <Button
          icon={{
            name: 'close',
            size: 20,
            color: `${COLORS.GREY}`,
          }}
          buttonStyle={styles.closeBtn}
          onPress={onClose}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card containerStyle={styles.card}>
          <Card.Title>{data.title}</Card.Title>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>{t('rating')}</Text>
            <Text>{data.imDbRating}</Text>
          </View>
          <Text>{data.description}</Text>
          <Card.Image
            source={{
              uri: data.image,
            }}
            resizeMode="contain"
          />
        </Card>
      </ScrollView>
      <Button title={t('addToFavorites')} />
    </Overlay>
  );
};

export default MovieInfo;
