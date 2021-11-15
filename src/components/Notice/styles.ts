import { StyleSheet } from 'react-native';
import { COLORS } from 'utils/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  text: {
    color: COLORS.GREY,
    textAlign: 'center',
  },
  error: {
    color: COLORS.RED,
    textAlign: 'center',
  },
});

export default styles;
