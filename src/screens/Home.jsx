import { View, Text, useColorScheme, StyleSheet, TextInput } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPad from '../../components/ButtonPad'


const Home = () => {
  const theme = useColorScheme();
  const isDarkModeOn = theme == 'dark';
  const styles = useMemo(() => createStyles(isDarkModeOn), [isDarkModeOn]);


  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.displayMenue}>

      </View>

      <View style={styles.buttonPane}>
        <ButtonPad />

      </View>

    </SafeAreaView>
  )
}

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: isDarkMode ? "black" : "white",
    },
    displayMenue: {
      height: "25%",
      backgroundColor: "green"
    },
    buttonPane: {
      height: "75%",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      // backgroundColor: "yellow",
    }
  })

export default Home