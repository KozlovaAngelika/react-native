import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import './utils/i18n/index';
import { Provider } from 'react-redux';
import state from './redux/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  text: {
    color: '#808080',
  },
});

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
