"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column",
        padding: 10,
        marginBottom: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#8FB299",
        padding: 15
    },
    whiteText: {
        color: "#FFF"
    },
    circleText: {
        fontSize: 16,
        margin: "auto"
    },
    grayText: {
        color: "#655252"
    },
    fadedBackground: {
        backgroundColor: "#B2A1A1"
    }
});
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var excercise = _a.excercise, repsSetsAndWeight = _a.repsSetsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (React.createElement(react_native_1.View, { style: styles.card },
        React.createElement(react_native_1.View, { style: styles.topRow },
            React.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
            React.createElement(react_native_1.Text, { style: styles.topRowText }, repsSetsAndWeight)),
        React.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === "x") {
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                    React.createElement(react_native_1.Text, { style: [styles.grayText, styles.circleText] }, "X")));
            }
            if (set === "") {
                return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: [styles.circle, styles.fadedBackground], key: set + index }));
            }
            return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: [styles.whiteText, styles.circleText] }, set)));
        }))));
});