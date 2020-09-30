import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MyComponent from "./components/MyComponent";
import StatefulComponent from "./components/StatefulComponent";
import CounterExample from "./components/CounterExample";

ReactDOM.render(
  <React.StrictMode>
    <MyComponent name="Aybars" />
    <StatefulComponent name="Aybars" />
    <CounterExample />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
