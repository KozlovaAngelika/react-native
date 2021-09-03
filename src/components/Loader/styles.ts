import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: COLORS.GREY,
  },
});

export default styles;
