import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';

const NoResultsMessage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('noResults')}</Text>
    </View>
  );
};

export default NoResultsMessage;
