import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home'
import History from './src/screens/History'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { isDisabled } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData';

function MyTabs() {
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme();
  const isDark = theme == 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#786D58",
        tabBarActiveBackgroundColor: isDark ? '#1E3B2E': '#C9DCC8',
        tabBarInactiveBackgroundColor: isDark ? '#1A1D21': '#FDFDFF',
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lime"
  }
})
export default App

