import React, { useMemo } from "react"
import { View, StyleSheet, Text, Pressable, Dimensions, useColorScheme } from 'react-native'
import Data from './Data'
import Evaluate from '../src/JS/Evaluate'

const buttonPressed = ({ idx, userInput, setUserInput}) => {

    const buttonData = Data.find(item => item.idx === idx)
    const currentInput = buttonData.isNumber ? buttonData.number : buttonData.operation;
    if (!(buttonData.isNumber) && (buttonData.operation == '=')) {
        const ans = Evaluate(userInput);
        setUserInput(ans);
    } else setUserInput(String(userInput) + String(currentInput));
}

function CircleButton({ idx, userInput, setUserInput}) {
    const theme = useColorScheme();
    const isDark = theme == 'dark';
    const styles = useMemo(() => createStyles(isDark), [isDark]);
    return (
        <Pressable style={[styles.container, {backgroundColor: Data[idx].isNumber ? (isDark ? '#343A40': '#F1F3F5'):(idx == 15 ? (isDark ? ('#8C7F72'):('#343A40')): (isDark ? ('#4C627A'):('#8C7F72'))) }]} onPress={() => buttonPressed({ idx, userInput, setUserInput})}>
            <Text style={[styles.circleData, {color: Data[idx].isNumber ? (isDark ? ('#8C7F72'):('#343A40')): (isDark ? ('white'):('#F1F3F5'))}]}> {Data[idx].isNumber ? Data[idx].number : Data[idx].operation}</Text>
        </Pressable>
    )
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const createStyles = (isDark) => StyleSheet.create({
    container: {
        width: "20%",
        height: "20%",
        aspectRatio: 1,
        borderWidth: 1,
        borderRadius: "50%",
        color: "black",
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: isDark ? "#dadada": "#F1F3F5"
    },
    circleData: {
        fontSize: screenHeight * 0.20 * 0.2,
        fontWeight: 500,
        textAlign: 'center',
        color: "#000000",
    }
})
export default CircleButton