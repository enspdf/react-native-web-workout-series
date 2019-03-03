import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  onPress: () => void;
}

const styles = StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    backgroundColor: "pink",
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    marginBottom: 2
  },
  text: {
    fontSize: 18
  }
});

export const Fab: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
