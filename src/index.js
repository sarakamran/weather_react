import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weatherinfo from "./Weatherinfo";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main">
      <h1> Weather App </h1>
      <Weatherinfo />
      <small>
        <a href="https://github.com/sarakamran/react-weather" target="_blank">
          Open-source code
        </a>
        , by <a href="/">Sara Kamran</a>
      </small>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
