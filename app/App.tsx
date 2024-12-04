import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import './globals.css';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './theme/ThemeContext';
import {HomeScreen} from './screens/HomeScreen';
import {SettingsScreen} from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-gray-50 dark:bg-gray-900 h-full';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
