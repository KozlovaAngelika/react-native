import { StyleSheet } from 'react-native';

const blackColor = '#000';
const whiteColor = '#fff';

const styles = StyleSheet.create({
  searchPanel: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: whiteColor,
    shadowColor: blackColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  searchInput: {
    backgroundColor: whiteColor,
  },
  searchIcon: {
    position: 'absolute',
  },
});

export default styles;
