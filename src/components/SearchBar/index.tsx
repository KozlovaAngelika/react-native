import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';
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
  const debouncedOnChangeValue = useCallback(
    () => debounce(onChangeValue, 300),
    [onChangeValue],
  );

  return (
    <View style={styles.searchPanel}>
      <TextInput
        placeholder={placeholder}
        selectionColor={COLORS.BLACK}
        value={value}
        onChangeText={debouncedOnChangeValue}
        style={styles.searchInput}
      />
      <Icon name="search" />
    </View>
  );
};

export default SearchBar;
