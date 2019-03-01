import React, { useContext } from "react";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { RootStoreContext } from "./stores/RootStore";
import { Router, Switch, Route } from "./Router/index";

export const Routes = () => {
  const rootStore = useContext(RootStoreContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistory} />
        <Route exact path="/current-workout" component={CurrentWorkout} />
      </Switch>
    </Router>
  );
};
