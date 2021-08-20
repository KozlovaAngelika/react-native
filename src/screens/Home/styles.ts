import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 5,
  },
  moviesContainer: {
    paddingHorizontal: 35,
  },
});

export default styles;
