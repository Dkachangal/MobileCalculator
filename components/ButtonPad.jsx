import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CircleButton from './CircleButton'

function ButtonPad() {
    return (
        <View style={styles.btnPad}>
            <View style={styles.row} >
                <CircleButton idx = {0}/>
                <CircleButton idx = {1}/>
                <CircleButton idx = {2}/>
                <CircleButton idx = {3}/>
            </View>
            <View style={styles.row} >
                <CircleButton idx = {4}/>
                <CircleButton idx = {5}/>
                <CircleButton idx = {6}/>
                <CircleButton idx = {7}/>
            </View>
            <View style={styles.row} >
                <CircleButton idx = {8}/>
                <CircleButton idx = {9}/>
                <CircleButton idx = {10}/>
                <CircleButton idx = {11}/>
            </View>
            <View style={styles.row} >
                <CircleButton idx = {12}/>
                <CircleButton idx = {13}/>
                <CircleButton idx = {14}/>
                <CircleButton idx = {15}/>
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