import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import './utils/i18n/index';
import styles from './styles';

const App: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('title')}
      </Text>
    </View>
  );
};
export default App;
