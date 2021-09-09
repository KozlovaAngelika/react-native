import React from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'utils/constants';
import styles from './styles';

interface Props {
  value: string;
  onChangeValue: (e: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChangeValue }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.searchPanel}>
      <TextInput
        placeholder={t('search')}
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
