import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styles from "./styles/global";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default function App() {
  const [currentBreak, setCurrentBreak] = useState(0);
  const [prevBreak, setPrevBreak] = useState(0);
  const [highestBreak, setHighestBreak] = useState(0);

  function addToBreak(value) {
    setCurrentBreak((prev) => prev + value);
  }
  function endBreak(value) {
    if (currentBreak > highestBreak) {
      setHighestBreak(currentBreak);
    }
    setPrevBreak(currentBreak);
    setCurrentBreak(0);
  }

  return (
    <SafeAreaView style={styles.containerMain}>
      <View style={styles.containerScore}>
        <Text style={styles.textCurrentBreak}>{currentBreak}</Text>
        <Text>B</Text>
        <Text style={styles.textPrevBreak}>{prevBreak}</Text>
        <Text>L</Text>
        <Text style={styles.textHighestBreak}>{highestBreak}</Text>
        <Text>H</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.btnYellow}
          onPress={() => addToBreak(3)}
        >
          <Text style={styles.textBtn}>Yellow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGreen} onPress={() => addToBreak(4)}>
          <Text style={styles.textBtn}>Green</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBrown} onPress={() => addToBreak(5)}>
          <Text style={styles.textBtn}>Brown</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBlue} onPress={() => addToBreak(6)}>
          <Text style={styles.textBtn}>Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPink} onPress={() => addToBreak(7)}>
          <Text style={styles.textBtn}>Pink</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBlack} onPress={() => addToBreak(8)}>
          <Text style={styles.textBtnWhite}>Black</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRed} onPress={() => addToBreak(1)}>
          <Text style={styles.textBtn}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMiss} onPress={() => endBreak()}>
          <Text style={styles.textBtnRed}>Miss</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
