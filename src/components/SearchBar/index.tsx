import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { COLORS } from 'utils/constants';

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

export default React.memo(SearchBar);
