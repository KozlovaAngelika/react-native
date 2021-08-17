import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import Home from '../../screens/Home';
import TopMovies from '../../screens/TopMovies';
import Favorites from '../../screens/Favorites';
import '../../utils/i18n';
import { COLORS } from '../../utils/constants';

const Tab = createMaterialBottomTabNavigator();

const Tabs: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: COLORS.GREY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: `${t('home')}`,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={26} color={COLORS.WHITE} />
          ),
        }}
      />
      <Tab.Screen
        name="TopMovies"
        component={TopMovies}
        options={{
          tabBarLabel: `${t('top250')}`,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="thumb-up" size={26} color={COLORS.WHITE} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: `${t('favorites')}`,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="star" size={26} color={COLORS.WHITE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
