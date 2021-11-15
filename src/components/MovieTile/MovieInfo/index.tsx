import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Overlay, Card, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Loader from 'components/Loader';
import { COLORS } from 'utils/constants';
import Content from 'components/Content';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfo, clearMovieInfo } from 'store/movieInfo/actions';
import selectMovieInfo from 'store/movieInfo/selectors';
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
  const { loading, error, data: additionalInfo }: MovieInfoState = useSelector(
    selectMovieInfo,
  );
  const dispatch = useDispatch();
  const errorMessage = t('errorShortMessage');

  useEffect(() => {
    dispatch(clearMovieInfo());
    dispatch(getMovieInfo(data.id));
  }, []);

  return (
    <Overlay isVisible={isVisible} fullScreen overlayStyle={styles.overlay}>
      <View style={styles.btnContainer}>
        <Button
          icon={<Icon name="close" color={COLORS.GREY} />}
          buttonStyle={styles.closeBtn}
          onPress={onClose}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card containerStyle={styles.card}>
          <Card.Title>{data.title}</Card.Title>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>{t('rating')}</Text>
            <Content
              isLoading={loading}
              message={error ? errorMessage : additionalInfo.imDbRating}
              error={!!error}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Content
              isLoading={loading}
              message={error ? errorMessage : additionalInfo.plot}
              error={!!error}
            />
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
