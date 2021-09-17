import React, { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'utils/constants';
import Loader from 'components/Loader';
import { API_KEY, API_URL } from 'react-native-dotenv';
import Notice from 'components/Notice';
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
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [raiting, setRaiting] = useState('');
  const [error, setError] = useState(false);

  const getAdditionalInfo = (): void => {
    setLoading(true);
    axios
      .get<GetAdditionalInfoResponse>(
        `${API_URL}/Title/${API_KEY}/${data.id}/Ratings`,
      )
      .then((res) => {
        setLoading(false);
        const { plot, imDbRating, errorMessage } = res.data;
        if (errorMessage) {
          setError(true);
        } else {
          setDescription(plot);
          setRaiting(imDbRating);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(getAdditionalInfo, []);

  const renderContent = (type: string): ReactElement => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <Notice message={t('errorShortMessage')} isError />;
    }
    if (!type.length) {
      return <Text>-</Text>;
    }
    return <Text>{type}</Text>;
  };
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
            <View>{renderContent(raiting)}</View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description} testID="description">
              {renderContent(description)}
            </Text>
          </View>
          <Card.Image source={{ uri: data.image }} resizeMode="contain" />
        </Card>
      </ScrollView>
      <Button
        title={isInFavorites ? t('removeFromFavorites') : t('addToFavorites')}
        buttonStyle={
          isInFavorites
            ? { backgroundColor: COLORS.RED_DARK }
            : { backgroundColor: COLORS.GREEN }
        }
        onPress={toggleIsFavorite}
        testID="toggleBtn"
      />
    </Overlay>
  );
};

export default React.memo(MovieInfo);
