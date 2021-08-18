import React from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../utils/constants';
import styles from './styles';

interface SearchBarProps {
  value: string;
  onChangeValue: (e: React.FormEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeValue }) => (
  <View style={styles.searchPanel}>
    <TextInput
      placeholder="Search"
      selectionColor={COLORS.BLACK}
      value={value}
      onChange={onChangeValue}
      style={styles.searchInput}
    />
    <Icon name="search" />
  </View>
);

export default SearchBar;
