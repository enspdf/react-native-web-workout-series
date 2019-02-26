import React, { useContext } from "react";
import { RouterStoreContext } from "./stores/RouterStore";
import { observer } from "mobx-react-lite";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { CurrentWorkout } from "./modules/CurrentWorkout";

export const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return routerStore.screen === "WorkoutHistory" ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  );
});
