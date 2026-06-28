import { View, Text, useColorScheme, StyleSheet, FlatList, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import HistoryData from '../../components/HistoryData'
import HistoryRenderCard from '../../components/HistoryRenderCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'

const dataKey = "CALCHis";

const History = () => {
  const theme = useColorScheme();
  const isDarkMode = theme == 'dark';
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);
  const [localHistory, setLocalHistory] = useState([]);
  const isOnScreen = useIsFocused();

  const clearHis = async () => {
    try {
      await AsyncStorage.removeItem(dataKey);
      console.log("Storage cleared");
    } catch (e) {
      console.log(e);
    }
  }

  const clearHistory = () => {
    HistoryData.length = 0;
    setLocalHistory([]);
    clearHis();
  }

  const getData = async () => {
    try {
      const histo = await AsyncStorage.getItem(dataKey);

      if (histo !== null) {
        const parsedHis = JSON.parse(histo);
        console.log("Successfully fetched from device storage:", parsedHis);

        // Sync back to your global in-memory array so things carry over perfectly
        HistoryData.length = 0;
        HistoryData.push(...parsedHis);

        setLocalHistory(parsedHis);
      } else {
        setLocalHistory([...HistoryData]);
      }
    } catch (e) {
      console.log("Error inside getData:", e);
    }
  }

  useEffect(() => {
    if (isOnScreen) {
      // Clean and safe: Just fetch what's on the disk. No risk of accidental overwriting.
      getData();
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
      {(!localHistory || localHistory.length === 0) ? 
        (<View style={styles.noHistoryBox}><Text style={styles.noHistoryText}>No History</Text></View>)
        : (
          <>
            <FlatList
              data={localHistory}
              renderItem={addItem}
              keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
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