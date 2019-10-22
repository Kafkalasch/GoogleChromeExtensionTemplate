import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./Index.scss";
import { getStore } from "./store/Store";
import HelloWorldComponent from "./ui/HelloWorldComponent";

const store = getStore();

ReactDOM.render(
    <Provider store={store}>
        <HelloWorldComponent />
    </Provider>,
    document.getElementById("root")
);
