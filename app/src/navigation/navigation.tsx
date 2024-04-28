import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import TabNavigation from '@navigation/tabNavigation';
import { screenNames } from '@utils/enums';
import { useTypedSelector } from '@redux/store';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const { localisationFlag } = useTypedSelector(
    (state) => state.localisationReducer,
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localisationFlag);
  }, [localisationFlag]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={screenNames.HOME_BASE}
          options={{ headerShown: false }}
          component={TabNavigation}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
