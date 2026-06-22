import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CircleButton from './CircleButton'

function ButtonPad({userInput, setUserInput, answer, setAnswer}) {
    return (
        <View style={styles.btnPad}>
            <View style={styles.row} >
                <CircleButton idx = {0} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {1} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {2} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {3} userInput = {userInput} setUserInput = {setUserInput} />
            </View>
            <View style={styles.row} >
                <CircleButton idx = {4} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {5} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {6} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {7} userInput = {userInput} setUserInput = {setUserInput} />
            </View>
            <View style={styles.row} >
                <CircleButton idx = {8} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {9} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {10} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {11} userInput = {userInput} setUserInput = {setUserInput} />
            </View>
            <View style={styles.row} >
                <CircleButton idx = {12} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {13} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {14} userInput = {userInput} setUserInput = {setUserInput} />
                <CircleButton idx = {15} userInput = {userInput} setUserInput = {setUserInput} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnPad: {
        flex: 1,
        flexDirection: "column"
    },
    row: {
        flex:1,
        flexDirection: 'row',
        height: "25%",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})
export default ButtonPad