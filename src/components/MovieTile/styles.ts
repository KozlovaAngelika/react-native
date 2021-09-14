import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  removeBtn: {
    backgroundColor: COLORS.WHITE,
    padding: 0,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 0,
  },
  placeholderStyle: {
    backgroundColor: COLORS.GREY,
  },
});

export default styles;
