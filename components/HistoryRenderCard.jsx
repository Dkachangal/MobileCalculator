import React, { useMemo } from "react"
import { View, Text, StyleSheet, useColorScheme, Dimensions, Pressable } from 'react-native'
import HistoryData from "./HistoryData";

function HistoryRenderCard({ id, expression, result }) {
    const theme = useColorScheme();
    const isDark = theme == 'dark';
    const styles = useMemo(() => createStyles(isDark), [isDark]);


    return (

        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.idText}>#{id}</Text>
            </View>
            <View style={styles.calculationBody}>
                <Text style={styles.expressionText}>{expression}</Text>
                <Text style={styles.resultText}>= {result}</Text>
            </View>
        </View>


    )
}

const createStyles = (isDark) => StyleSheet.create({


    container: {
        width: "92%",
        alignSelf: 'center',
        backgroundColor: isDark ? "#1E3B2E" : "#C9DCC8",
        padding: 16,
        borderRadius: 12,
        marginVertical: 6,
        borderWidth: 0.5,
        borderColor: isDark ? "#343A40" : "#E2E8F0"
    },
    cardHeader: {
        marginBottom: "4%",
    },
    idText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: isDark ? '#8C7F72' : '#4C627A'
    },
    calculationBody: {
        alignItems: 'flex-end'
    },
    expressionText: {
        fontSize: 18,
        color: isDark ? "#A0AAB2" : "#6C757D"
    },
    resultText: {
        fontSize: 24,
        fontWeight: '600',
        color: isDark ? "white" : "#1A1D21",
        marginTop: 2
    }
})

export default HistoryRenderCard;