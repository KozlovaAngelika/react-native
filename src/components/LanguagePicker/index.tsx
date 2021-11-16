import React from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Flag from 'react-native-flags';
import { useDispatch } from 'react-redux';
import { changeLanguage } from 'store/config/actions';
import i18next from 'i18next';
import { flagKeys, languages } from 'utils/constants';
import styles from './styles';

const LanguageSelection: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const onSelectHandler = async (_selectedItem: string, index: number) => {
    const langKey = languages[index];
    dispatch(changeLanguage(langKey));
    await i18next.changeLanguage(langKey);
  };

  return (
    <SelectDropdown
      renderCustomizedRowChild={(selectedItem) => (
        <View style={styles.container}>
          <Text style={styles.text}>{selectedItem}</Text>
          <Flag code={flagKeys[selectedItem] ?? 'shiny'} size={16} />
        </View>
      )}
      data={languages}
      defaultValue="en"
      buttonStyle={styles.btn}
      dropdownStyle={styles.dropdown}
      rowStyle={styles.row}
      onSelect={onSelectHandler}
      buttonTextAfterSelection={(selectedItem) => selectedItem}
      rowTextForSelection={(item) => item}
    />
  );
};

export default React.memo(LanguageSelection);
