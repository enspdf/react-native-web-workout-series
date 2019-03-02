import * as React from "react";
import { Card } from "./Card";
import { CurrentExcercise } from "../stores/WorkoutStore";
import { Text } from "react-native";

interface Props {
  header: string;
  currentExercises: CurrentExcercise[];
}

const exerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({ header, currentExercises }) => {
  return (
    <Card>
      <Text>{header}</Text>
      {currentExercises.map(ce => {
        return (
          <Text key={ce.exercise}>{`${
            exerciseShortName[ce.exercise as keyof typeof exerciseShortName]
          } ${ce.numSets}x${ce.reps} ${ce.weight}`}</Text>
        );
      })}
    </Card>
  );
};
