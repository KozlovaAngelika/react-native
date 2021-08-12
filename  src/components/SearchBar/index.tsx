import React from 'react';
import {
  TextInput,
  View,
  Image,
} from 'react-native';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

const SearchBar: SearchBar = ({ value, onChangeValue }) => (
  <View style={styles.searchPanel}>
    <TextInput placeholder="Search" value={value} onChangeText={onChangeValue} style={styles.searchInput} />
    {/* <Image source={SearchIcon} style={styles.searchIcon} /> */}
  </View>
);

export default SearchBar;
