import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 15,
  },
  title: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  btn: {
    backgroundColor: COLORS.WHITE,
    padding: 0,
  },
  btnContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 0,
  },
});

export default styles;
