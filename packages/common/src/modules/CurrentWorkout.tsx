import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WorkoutCard } from "../ui/WorkoutCard";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);
  React.useEffect(() => {
    return rootStore.workoutTimerStore.stopTimer();
  }, []);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExercises.map(exercise => {
        return (
          <WorkoutCard
            onSetPress={setIndex => {
              rootStore.workoutTimerStore.startTimer();

              const value = exercise.sets[setIndex];

              let newValue: string;

              if (value === "") {
                newValue = `${exercise.reps}`;
              } else if (value === "0") {
                rootStore.workoutTimerStore.stopTimer();
                newValue = "";
              } else {
                newValue = `${parseInt(value) - 1}`;
              }

              exercise.sets[setIndex] = newValue;
            }}
            key={exercise.excercise}
            sets={exercise.sets}
            excercise={exercise.excercise}
            repsSetsAndWeight={`${exercise.numSets}x${exercise.reps} ${
              exercise.weight
            }`}
          />
        );
      })}
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimer
          percent={rootStore.workoutTimerStore.percent}
          currentTime={rootStore.workoutTimerStore.display}
          onXPress={() => rootStore.workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  );
});
