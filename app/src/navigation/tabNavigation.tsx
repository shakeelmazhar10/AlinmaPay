import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { screenNames } from '@utils/enums';
import Home from '@screens/Home/Home.screen';
import Profile from '@screens/Profile/Profile.screen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screenNames.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => <Icon name="home-outline" size={25} color={color} />
        }}
      />
      <Tab.Screen
        name={screenNames.PROFILE}
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
