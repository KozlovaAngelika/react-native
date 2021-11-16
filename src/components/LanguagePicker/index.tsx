import React from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Flag from 'react-native-flags';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { changeLanguage } from 'store/config/actions';
import i18next from 'i18next';
import { flagKeys, languages, toastTypes } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import styles from './styles';

const LanguagePicker: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onSelectHandler = async (_selectedItem: string, index: number) => {
    const langKey = languages[index];
    try {
      await i18next.changeLanguage(langKey);
      dispatch(changeLanguage(langKey));
      Toast.show({
        type: toastTypes.success,
        text1: t('success'),
        text2: t('langСhanged'),
      });
    } catch (error) {
      Toast.show({
        type: toastTypes.error,
        text1: t('error'),
        text2: t('errorMessage'),
      });
    }
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

export default React.memo(LanguagePicker);
