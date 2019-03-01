import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { Routes } from "./Routes";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Routes />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    height: "100%"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425
  }
});
