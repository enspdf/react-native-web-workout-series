import * as React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = React.useContext(RouterStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => (routerStore.screen = "CurrentWorkout")}
      />
    </View>
  );
});
