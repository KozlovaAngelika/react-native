import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from 'utils/constants';
import styles from './styles';

const Loader: React.FunctionComponent = () => (
  <View style={styles.container} testID="loader">
    <ActivityIndicator size="large" color={COLORS.LIGHT_GREY} />
  </View>
);

export default Loader;
