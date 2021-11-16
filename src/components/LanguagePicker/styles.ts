import { StyleSheet } from 'react-native';
import { COLORS } from 'utils/constants';

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    margin: 10,
    padding: 0,
    borderRadius: 15,
    borderColor: COLORS.GREY,
    borderWidth: 1.5,
    color: COLORS.GREY,
    backgroundColor: COLORS.WHITE,
  },
  dropdown: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderBottomColor: COLORS.GREY,
    color: COLORS.GREY,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default styles;
