import React from "react"
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Data from './Data'

const buttonPressed = ({idx}) => {

    const buttonData = Data.find(item => item.idx === idx)
    console.log(buttonData.isNumber ? buttonData.number : buttonData.operation);

    
}

function CircleButton({idx}) {
    return (
        <Pressable style = {styles.container} onPress={() => buttonPressed({idx})}>
            <Text>1</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "20%",
        height: "20%",
        aspectRatio: 1,
        borderWidth: 1,
        borderRadius: "50%",
        color: "black"
    }
})
export default CircleButton