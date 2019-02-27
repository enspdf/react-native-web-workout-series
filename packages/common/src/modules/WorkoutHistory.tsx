import * as React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              excercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },
            {
              excercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["5", "5", "5", "5", "5"],
              weight: 200
            },
            {
              excercise: "Deadlift",
              numSets: 5,
              reps: 5,
              sets: ["5", "x", "x", "x", "x"],
              weight: 360
            }
          );
          rootStore.routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
