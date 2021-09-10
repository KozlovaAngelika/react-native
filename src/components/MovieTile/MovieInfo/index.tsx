import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  toggleIsFavorite: () => void;
  isInFavorites: boolean;
  data: Movie;
}

const MovieInfo: React.FC<Props> = ({
  isVisible,
  onClose,
  toggleIsFavorite,
  isInFavorites,
  data,
}) => {
  const { t } = useTranslation();
  return (
    <Overlay isVisible={isVisible} fullScreen overlayStyle={styles.overlay}>
      <View style={styles.btnContainer}>
        <Button
          icon={<Icon name="close" />}
          buttonStyle={styles.closeBtn}
          onPress={onClose}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card containerStyle={styles.card}>
          <Card.Title>{data.title}</Card.Title>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>{t('rating')}</Text>
          </View>
          <Card.Image source={{ uri: data.image }} resizeMode="contain" />
        </Card>
      </ScrollView>
      <Button
        title={isInFavorites ? t('removeFromFavorites') : t('addToFavorites')}
        onPress={toggleIsFavorite}
      />
    </Overlay>
  );
};

export default React.memo(MovieInfo);
