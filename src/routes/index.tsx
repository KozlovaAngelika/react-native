import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TabIcon from '../components/TabIcon';
import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import TopMovies from '../screens/TopMovies';
import '../utils/i18n';
import { COLORS, ROUTES } from '../utils/constants';

const Tab = createBottomTabNavigator();

const Tabs: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          tabBarActiveTintColor: COLORS.BLACK,
        }}>
        <Tab.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            title: t('home'),
            tabBarIcon: ({ focused }) => <TabIcon iconName="home" focused={focused} />,
          }}
        />
        <Tab.Screen
          name={ROUTES.TOP_MOVIES}
          component={TopMovies}
          options={{
            title: t('top250'),
            tabBarIcon: ({ focused }) => <TabIcon iconName="thumb-up" focused={focused} />,
          }}
        />
        <Tab.Screen
          name={ROUTES.FAVORITES}
          component={Favorites}
          options={{
            title: t('favorites'),
            tabBarIcon: ({ focused }) => <TabIcon iconName="star" focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
