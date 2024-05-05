import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import Home from '@app/screens/home/home.screen';
import Profile from '@app/screens/profile/profile.screen';
import { screenNames } from '@utils/enums';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import useLocalization from '@hooks/localization.hook';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const { t, i18n } = useTranslation();
  const localizationText = useLocalization();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t(localizationText.home)}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => <Icon name="home-outline" size={25} color={color} />
        }}
      />
      <Tab.Screen
        name={t(localizationText.profile)}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => <Icon name="finger-print-sharp" size={25} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
