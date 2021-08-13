import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './styles';

interface SearchBarProps {
  value: string,
  onChangeValue: (e: React.FormEvent) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeValue }) => (
  <View style={styles.searchPanel}>
    <TextInput placeholder="Search" selectionColor="#808080" value={value} onChange={onChangeValue} style={styles.searchInput} />
    <IconFeather name="search" size={20} color="#808080" />
  </View>
);

export default SearchBar;
