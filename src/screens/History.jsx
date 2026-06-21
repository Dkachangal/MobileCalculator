import { View, Text, useColorScheme } from 'react-native'
import React from 'react'


const History = () => {
  const theme = useColorScheme();
  const isDarkMode = theme == 'dark';
  console.log(isDarkMode);
  
  return (
    <View>
      <Text>History</Text>
    </View>
  )
}

export default History