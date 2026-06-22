import { View, Text, useColorScheme, StyleSheet, FlatList, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import HistoryData from '../../components/HistoryData'
import HistoryRenderCard from '../../components/HistoryRenderCard'
import { SafeAreaView } from 'react-native-safe-area-context';

const History = () => {
  const theme = useColorScheme();
  const isDarkMode = theme == 'dark';
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);
  const [localHistory, setLocalHistory] = useState([]);
  const isOnScreen = useIsFocused();
  const clearHistory = () => {
    HistoryData.length = 0;
    setLocalHistory([]);
  }

  useEffect(() => {
    if (isOnScreen) {
      setLocalHistory([...HistoryData]);
    }
  }, [isOnScreen]);

  const addItem = ({ item }) => {
    return (
      <HistoryRenderCard
        id={item.id}
        expression={item.expression}
        result={item.result}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {localHistory.length == 0 ?
        (<View style={styles.noHistoryBox}><Text style={styles.noHistoryText}>No History</Text></View>)
        : (
          <>
            <FlatList
              data={localHistory}
              renderItem={addItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingVertical: 10 }}
              inverted
            />
            <View style={styles.clearMenue}>
              <Pressable style={styles.clrBtn} onPress={clearHistory}>
                <Text style={styles.clrBtnText}>Clear</Text>
              </Pressable>
            </View>

          </>

        )}
    </SafeAreaView>
  )
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const createStyles = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? "#22262B" : "#FDFDFF"
  },
  clearMenue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '3%',
    marginTop: '3%'

  },
  clrBtn: {
    backgroundColor: isDarkMode ? '#8C7F72' : '#4C627A',
    height: screenHeight * 0.07,
    width: screenWidth * 0.4,
    borderWidth: 0.5,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clrBtnText: {
    fontSize: screenHeight * 0.03,
    fontWeight: 600,
    color: "white"
  },
  noHistoryBox: {
    width: "92%",
    alignSelf: 'center',
    backgroundColor: isDarkMode ? "#1E3B2E" : "#C9DCC8",
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 0.5,
    borderColor: isDarkMode ? "#343A40" : "#E2E8F0"
  },
  noHistoryText: {
    fontSize: 24,
    fontWeight: '600',
    color: isDarkMode ? "white" : "#1A1D21",
    marginTop: 2
  }
})

export default History;