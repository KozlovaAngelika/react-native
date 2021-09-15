import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  isError?: boolean;
  message: string;
}
const Notice: React.FC<Props> = ({ isError, message }) => (
  <View style={styles.container}>
    <Text style={isError ? styles.error : styles.text} testID="noticeText">
      {message}
    </Text>
  </View>
);

export default Notice;
