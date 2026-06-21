import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home'
import History from './src/screens/History'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarActiveBackgroundColor: "green",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme == 'dark';
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

