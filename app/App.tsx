/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import MainNavigation from '@app/navigation/navigation';
import { persistor, store } from '@redux/store';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <MainNavigation />
          {/* <StorybookUIRoot /> */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
