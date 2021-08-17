import { StyleSheet } from 'react-native';
import { COLORS } from './utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  text: {
    color: COLORS.LIGHT_GREY,
  },
});

export default styles;
