import { createContext } from "react";
import { observable } from "mobx";

type Routes = "WorkoutHistory" | "CurrentWorkout";

class RouterStore {
  @observable screen: Routes = "WorkoutHistory";
}

export const RouterStoreContext = createContext(new RouterStore());
