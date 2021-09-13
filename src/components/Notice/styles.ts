import { StyleSheet } from 'react-native';
import { COLORS } from 'utils/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
  error: {
    color: COLORS.RED,
    textAlign: 'center',
  },
});

export default styles;
