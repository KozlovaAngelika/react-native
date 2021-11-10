/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Flag from 'react-native-flags';
import { useDispatch } from 'react-redux';
import { changeLanguage } from 'store/languageSelection/actions';
import i18next from 'i18next';
import styles from './styles';

const languages = ['en', 'ru'];

const flagKeys = new Map([
  ['en', 'GB'],
  ['ru', 'RU'],
]);

const LanguageSelection: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const getFlag = (flagName: string): string =>
    flagKeys.get(flagName) ?? 'shiny';
  return (
    <SelectDropdown
      renderCustomizedRowChild={(selectedItem) => (
        <View style={styles.container}>
          <Text style={styles.text}>{selectedItem}</Text>
          <Flag code={getFlag(selectedItem)} size={16} />
        </View>
      )}
      data={languages}
      defaultValue="en"
      buttonStyle={styles.btn}
      dropdownStyle={styles.dropdown}
      rowStyle={styles.row}
      onSelect={(selectedItem, index) => {
        const langKey = languages[index];
        dispatch(changeLanguage(langKey));
        i18next.changeLanguage(langKey);
      }}
      buttonTextAfterSelection={(selectedItem, index) => selectedItem}
      rowTextForSelection={(item, index) => item}
    />
  );
};

export default LanguageSelection;
