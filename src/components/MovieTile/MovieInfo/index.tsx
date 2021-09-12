import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { API_KEY, API_URL } from 'react-native-dotenv';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  data: Movie;
}

const MovieInfo: React.FC<Props> = ({ isVisible, onClose, data }) => {
  const { t } = useTranslation();
  const [description, setDescription] = useState('');
  const [raiting, setRaiting] = useState('');
  const [error, setError] = useState(false);
  const getAdditionalInfo = (): void => {
    axios
      .get<GetAdditionalInfoResponse>(
        `${API_URL}/Title/${API_KEY}/${data.id}/Ratings`,
      )
      .then((res) => {
        const { plot, imDbRating, errorMessage } = res.data;
        if (errorMessage) {
          setError(true);
        } else {
          setDescription(plot);
          setRaiting(imDbRating);
        }
      })
      .catch(() => {
        setError(true);
      });
  };
  useEffect(getAdditionalInfo, []);
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
            <Text>{raiting}</Text>
          </View>
          <Text>{description}</Text>
          <Card.Image source={{ uri: data.image }} resizeMode="contain" />
        </Card>
      </ScrollView>
      <Button title={t('addToFavorites')} />
    </Overlay>
  );
};

export default React.memo(MovieInfo);
