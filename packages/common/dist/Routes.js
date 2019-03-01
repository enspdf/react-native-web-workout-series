"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var RootStore_1 = require("./stores/RootStore");
var index_1 = require("./Router/index");
exports.Routes = function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: WorkoutHistory_1.WorkoutHistory }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/current-workout", component: CurrentWorkout_1.CurrentWorkout }))));
};
