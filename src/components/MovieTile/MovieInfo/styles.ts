import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/constants';

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 25,
    backgroundColor: COLORS.WHITE,
  },
  card: {
    padding: 30,
    borderWidth: 0,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  description: {
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  ratingTitle: {
    marginRight: 8,
  },
  btnContainer: {
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  closeBtn: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.GREY,
    width: 35,
    height: 35,
    padding: 0,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.GREY,
  },
  addBtn: {
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 10,
  },
});

export default styles;
