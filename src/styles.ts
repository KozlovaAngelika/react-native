import { StyleSheet } from 'react-native';
import colors from './utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  text: {
    color: colors.lightGray,
  },
});

export default styles;
