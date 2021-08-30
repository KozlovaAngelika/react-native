import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../utils/constants';

const Loader: React.FunctionComponent = () => (
  <View>
    <ActivityIndicator size="large" color={COLORS.LIGHT_GREY} />
  </View>
);

export default Loader;
