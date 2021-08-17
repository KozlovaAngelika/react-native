import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  searchPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    fontFamily: 'Feather',
  },
});

export default styles;
