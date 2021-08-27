import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const ErrorMessage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('error')}</Text>
    </View>
  );
};

export default ErrorMessage;
