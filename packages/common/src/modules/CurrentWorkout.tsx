import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA"
  }
});

export const CurrentWorkout: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <WorkoutCard
        sets={["5", "5", "5", "", "x"]}
        excercise="Squat"
        repsSetsAndWeight="5x5 260"
      />
    </View>
  );
};
