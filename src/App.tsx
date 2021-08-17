import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import './utils/i18n/index';
import { Provider } from 'react-redux';
import state from './redux';
import styles from './styles';

const App: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Provider store={state}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {t('title')}
        </Text>
      </View>
    </Provider>
  );
};

export default App;
