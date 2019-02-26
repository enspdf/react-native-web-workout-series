"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RoutesStore_1 = require("./stores/RoutesStore");
var mobx_react_lite_1 = require("mobx-react-lite");
exports.Routes = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RoutesStore_1.RoutesStoreContext);
    return null;
});
