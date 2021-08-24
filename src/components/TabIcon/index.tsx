import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../utils/constants';

interface Props {
  iconName: string;
}

const TabIcon: React.FC<Props> = ({ iconName }) => (
  <MaterialCommunityIcons name={iconName} size={26} color={COLORS.DARK_GREY} />
);

export default React.memo(TabIcon);
