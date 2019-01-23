"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null, "CHANGE-ME"),
            React.createElement("div", null, process.cwd()),
            React.createElement("div", null, __dirname),
            React.createElement("div", null, __filename)));
    }
}
const $root = document.getElementById("root");
react_dom_1.render(React.createElement(App, null), $root);
// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
        console.log("==== Reload ====");
    });
}
