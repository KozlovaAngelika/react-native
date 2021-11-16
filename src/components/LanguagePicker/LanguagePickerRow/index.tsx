import Flag from 'react-native-flags';
import React from 'react';
import { View, Text } from 'react-native';
import { flagKeys, flagConfig } from 'utils/constants';
import styles from './styles';

const LanguagePickerRow: React.FunctionComponent = (selectedItem) => (
  <View style={styles.container}>
    <Text style={styles.text}>{selectedItem}</Text>
    <Flag
      code={flagKeys[selectedItem] ?? flagConfig.defaultValue}
      size={flagConfig.size}
    />
  </View>
);

export default LanguagePickerRow;
