import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 25,
    height: 250,
  },
  poster: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    borderRadius: 25,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    zIndex: 10,
    color: COLORS.DARK_GREY,
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default styles;
