import { View, Text, useColorScheme, StyleSheet, TextInput, Dimensions, Pressable, } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPad from '../../components/ButtonPad'


const Home = () => {
  const theme = useColorScheme();
  const isDarkModeOn = theme == 'dark';
  const styles = useMemo(() => createStyles(isDarkModeOn), [isDarkModeOn]);
  const [userInput, setUserInput] = useState('');
  const backSpace = () => {
    const len = userInput.length;
    if (len >= 1) setUserInput(userInput.slice(0, len - 1));
  }
  const clearScreen = () => setUserInput('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.displayMenue}>
        <Text style={styles.dispNumber}
          multiline
          numberOfLines={3}
        >{userInput}</Text>
        <View style={styles.clsAndBackMenueContainer}>
          <Pressable style={styles.clearContainer} onPress={backSpace}>
            <Text style={styles.clearContainerText}>Del</Text>
          </Pressable>
          <Pressable style={styles.clearContainer} onPress={clearScreen}>
            <Text style={styles.clearContainerText}>AC</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonPane}>
        <ButtonPad userInput={userInput} setUserInput={setUserInput} />
      </View>
    </SafeAreaView>
  )
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: isDarkMode ? "#1A1D21" : "#FDFDFF",
    },
    displayMenue: {
      height: "30%",
      backgroundColor: isDarkMode ? '#1E3B2E' : "#C9DCC8",
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    buttonPane: {
      height: "70%",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
    },
    dispNumber: {
      fontSize: screenHeight * 0.2 * 0.3,
      textAlign: 'right',
      justifyContent: 'center',
      color: isDarkMode ? '#ffffff': '#1E3B2E'
    },
    clsAndBackMenueContainer: {
      height: screenHeight * 0.05,
      flexDirection: "row-reverse",
      gap: screenWidth * 0.25 * 0.5
    },
    clearContainer: {
      width: screenWidth * 0.25,
      height: screenHeight * 0.05,
      borderWidth: 0.5,
      borderRadius: 100,
      backgroundColor: isDarkMode ? '#786D58' : '#3A4E5A',
      color: isDarkMode ? '#786D58' : '#786D58'


    },
    clearContainerText: {
      fontSize: screenHeight * 0.1 * 0.3,
      textAlign: 'center',
      alignContent: 'center',
      color: isDarkMode ? 'white' : "white",
    },

  })

export default Home