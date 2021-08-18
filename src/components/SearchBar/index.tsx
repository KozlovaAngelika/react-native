import React from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../utils/constants';
import styles from './styles';
import '../../utils/i18n';

interface Props {
  value: string;
  onChangeValue: (e: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChangeValue }) => {
  const { t } = useTranslation();
  const placeholder = `${t('search')[0].toUpperCase()}${t('search').slice(1)}`;
  return (
    <View style={styles.searchPanel}>
      <TextInput
        placeholder={placeholder}
        selectionColor={COLORS.BLACK}
        value={value}
        onChangeText={onChangeValue}
        style={styles.searchInput}
      />
      <Icon name="search" />
    </View>
  );
};

export default SearchBar;
