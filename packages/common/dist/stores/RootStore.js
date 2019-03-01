"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkoutStore_1 = require("./WorkoutStore");
var react_1 = require("react");
var WorkoutTimerStore_1 = require("./WorkoutTimerStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.workoutTimerStore = new WorkoutTimerStore_1.WorkoutTimerStore();
    }
    return RootStore;
}());
exports.RootStore = RootStore;
;
exports.RootStoreContext = react_1.createContext(new RootStore());
