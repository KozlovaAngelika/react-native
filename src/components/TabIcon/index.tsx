import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../utils/constants';

interface Props {
  iconName: string;
  focused: boolean;
}

const TabIcon: React.FC<Props> = ({ iconName, focused }) => (
  <MaterialCommunityIcons
    name={iconName}
    size={26}
    color={focused ? COLORS.BLACK : COLORS.GREY}
  />
);

export default TabIcon;
