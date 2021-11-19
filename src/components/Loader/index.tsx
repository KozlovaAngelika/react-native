import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';
import { COLORS } from 'utils/constants';

const Loader: React.FunctionComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.LIGHT_GREY} />
  </View>
);

export default Loader;
