import Flag from 'react-native-flags';
import React from 'react';
import { View, Text } from 'react-native';
import { flagKeys, flagConfig } from 'utils/constants';
import styles from './styles';

interface Props {
  selectedItem: string;
}

const LanguagePickerRow: React.FC<Props> = ({ selectedItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedItem}</Text>
      <Flag
        code={flagKeys[selectedItem] ?? flagConfig.defaultValue}
        size={flagConfig.size}
      />
    </View>
  );
};

export default React.memo(LanguagePickerRow);
