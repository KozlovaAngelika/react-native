import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const EmptyRequestNotice: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('emptyRequestNotice')}</Text>
    </View>
  );
};

export default EmptyRequestNotice;
