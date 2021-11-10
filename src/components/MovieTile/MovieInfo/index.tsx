/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'utils/constants';
import Loader from 'components/Loader';
import { API_KEY, API_URL } from 'react-native-dotenv';
import Content from 'components/Content/Content';
import styles from './styles';

export interface Props {
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
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [raiting, setRaiting] = useState('');
  const [error, setError] = useState(false);

  const getAdditionalInfo = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get<GetAdditionalInfoResponse>(
        `${API_URL}en/API/Title/${API_KEY}/${data.id}/Ratings`,
      );
      const { plot, imDbRating, errorMessage } = response.data;
      setLoading(false);
      if (errorMessage) {
        setError(true);
      } else {
        setDescription(plot);
        setRaiting(imDbRating);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getAdditionalInfo();
  }, []);

  useEffect(() => {
    if (error) {
      setDescription(t('errorShortMessage'));
      setRaiting(t('errorShortMessage'));
    } else if (
      (description && !description.length) ||
      (raiting && !raiting.length)
    ) {
      setDescription(t('noData'));
      setRaiting(t('noData'));
    } else {
      setDescription('');
      setRaiting('');
    }
  }, [error, data]);

  return (
    <Overlay
      isVisible={isVisible}
      fullScreen
      overlayStyle={styles.overlay}
      testID="overlay">
      <View style={styles.btnContainer}>
        <Button
          icon={<Icon name="close" color={COLORS.LIGHT_GREY} />}
          buttonStyle={styles.closeBtn}
          onPress={onClose}
          testID="closeBtn"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card containerStyle={styles.card}>
          <Card.Title>{data.title}</Card.Title>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>{t('rating')}</Text>
            <Content isLoading={loading} message={raiting} error={error} />
          </View>
          <View style={styles.descriptionContainer}>
            <Content isLoading={loading} message={description} error={error} />
          </View>
          <Card.Image
            source={{ uri: data.image }}
            placeholderStyle={{ backgroundColor: COLORS.WHITE }}
            PlaceholderContent={<Loader />}
            resizeMode="contain"
          />
        </Card>
      </ScrollView>
      {isInFavorites ? (
        <Button
          title={t('removeFromFavorites')}
          buttonStyle={{ backgroundColor: COLORS.RED_DARK }}
          onPress={toggleIsFavorite}
        />
      ) : (
        <Button
          title={t('addToFavorites')}
          buttonStyle={{ backgroundColor: COLORS.GREEN }}
          onPress={toggleIsFavorite}
        />
      )}
    </Overlay>
  );
};

export default React.memo(MovieInfo);
