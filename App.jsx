import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home'
import History from './src/screens/History'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function MyTabs() {
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme();
  const isDark = theme == 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#786D58",
        tabBarActiveBackgroundColor: isDark ? '#1E3B2E' : '#C9DCC8',
        tabBarInactiveBackgroundColor: isDark ? '#1A1D21' : '#FDFDFF',
        headerShown: false

      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: (({color, size, focused}) => 
            <Icon 
            name={focused ? "calculator" : "calculator-outline"} 
              size={size} 
              color={color}
              />
          )
        }}
      />
<Tab.Screen 
        name="History" 
        component={History}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon 
              name={focused ? "time" : "time-outline"} 
              size={size} 
              color={color}
            />
          )
        }}
      />
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

