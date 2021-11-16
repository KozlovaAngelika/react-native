import React from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Flag from 'react-native-flags';
import { useDispatch } from 'react-redux';
import { changeLanguage } from 'store/customization/actions';
import i18next from 'i18next';
import { flagKeys, languages } from 'utils/constants';
import styles from './styles';

const LanguageSelection: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const getFlag = (flagName: string): string => {
    return flagKeys[flagName] ?? 'shiny';
  };
  const onSelectHandler = (selectedItem: any, index: number): void => {
    const langKey = languages[index];
    dispatch(changeLanguage(langKey));
    i18next.changeLanguage(langKey);
  };

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
      onSelect={onSelectHandler}
      buttonTextAfterSelection={(selectedItem) => selectedItem}
      rowTextForSelection={(item) => item}
    />
  );
};

export default React.memo(LanguageSelection);
