import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';

const ErrorMessage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('error')}</Text>
    </View>
  );
};

export default ErrorMessage;
